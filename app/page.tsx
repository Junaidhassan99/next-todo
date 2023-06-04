"use client";
import ProfileImg from "@/components/profile-img";
import TextField from "@/components/text-field";
import TodoItem from "@/components/todo-item";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { TodoDataItem } from "@/data-types/data-types";
import { todo } from "node:test";
import RootLayout from "./layout";

export default function Home() {
  let [todoData, setTodoData] = useState([
    {
      _id: "i-1",
      task: "Tasking 1",
      complete: false,
      completeTime: undefined,
      creationTime: Date.now() + 1,
    },
  ] as TodoDataItem[]);

  async function addTodoItem(newData: TodoDataItem) {
    const tempId = Date.now().toString();
    setTodoData([...todoData, { ...newData, _id: tempId }]);

    //save message to db
    const responsePost = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    //Id of saved message
    const todoSavedId = await responsePost.json();

    const updatedIdList = todoData.map((item) => {
      if (item._id === tempId) {
        item._id = todoSavedId;
        return item;
      }
      return item;
    });
  }

  function deleteTodoItem(_id: string) {
    const newTodoData = todoData.filter((data) => data._id !== _id);

    setTodoData(newTodoData);

    console.log(_id);

    fetch(`/api/todo?id=${_id}`, {
      method: "DELETE",
    });
  }

  function togglecompleteTodoItem(_id: string) {
    const newTodoData = todoData.map((data) => {
      if (data._id === _id) {
        data.complete = !data.complete;
        if (data.complete) {
          data.completeTime = Date.now();
        } else {
          data.completeTime = undefined;
        }

        fetch(`/api/todo`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
      return data;
    });

    setTodoData(newTodoData);
  }

  useEffect(() => {
    fetch("/api/todo").then(async (res) => {
      setTodoData(await res.json());
    });
  }, []);

  return (
    <RootLayout>
      <div className="bg-cover bg-[url('/images/san-bridge.jpg')] h-screen overflow-y-auto">
        <div className="flex flex-col h-full items-center">
          <div className="my-5" />
          <ProfileImg />
          <div className="my-5" />
          <TextField addTodoItem={addTodoItem} />
          <div className="my-3" />
          {todoData.length > 0 && (
            <div className="py-2 rounded-md bg-white w-1/4 transp-background-only-80 shadow-md">
              {...todoData
                .sort(function (a, b) {
                  return a.creationTime - b.creationTime;
                })
                .map((data: TodoDataItem) => {
                  return (
                    <TodoItem
                      key={data._id}
                      data={data}
                      deleteTodoItem={deleteTodoItem}
                      togglecompleteTodoItem={togglecompleteTodoItem}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  );
}
