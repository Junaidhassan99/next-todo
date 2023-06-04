"use client";
import ProfileImg from "@/components/profile-img";
import TextField from "@/components/text-field";
import TodoItem from "@/components/todo-item";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { TodoDataItem } from "@/data-types/data-types";
import { todo } from "node:test";
import RootLayout from "./layout";

export default function Home() {
  let [todoData, setTodoData] = useState([] as TodoDataItem[]);
  // let dummyData = [
  //   {
  //     id: "i-1",
  //     task: "Tasking 1",
  //     complete: false,
  //     completeTime: undefined,
  //     creationTime: Date.now() + 1,
  //   },
  //   {
  //     id: "i-2",
  //     task: "Tasking 2",
  //     complete: false,
  //     completeTime: undefined,
  //     creationTime: Date.now() + 2,
  //   },
  //   {
  //     id: "i-3",
  //     task: "Tasking 3",
  //     complete: false,
  //     completeTime: undefined,
  //     creationTime: Date.now() + 3,
  //   },
  // ] as TodoDataItem[];

  function addTodoItem(newData: TodoDataItem) {
    setTodoData([...todoData, newData]);
  }

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
                  return <TodoItem key={data.id} data={data} />;
                })}
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  );
}
