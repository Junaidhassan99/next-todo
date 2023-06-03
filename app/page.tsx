import ProfileImg from "@/components/profile-img";
import TextField from "@/components/text-field";
import TodoItem from "@/components/todo-item";
import Image from "next/image";
import { Fragment } from "react";
import { TodoDataItem } from "@/data-types/data-types";

export default function Home() {
  var dummyData = [
    {
      id: "i-1",
      task: "Tasking 1",
      complete: false,
      completeTime: undefined,
      creationTime: Date.now() + 1,
    },
    {
      id: "i-2",
      task: "Tasking 2",
      complete: false,
      completeTime: undefined,
      creationTime: Date.now() + 2,
    },
    {
      id: "i-3",
      task: "Tasking 3",
      complete: false,
      completeTime: undefined,
      creationTime: Date.now() + 3,
    },
  ] as TodoDataItem[];

  return (
    <div className="bg-cover bg-[url('/images/san-bridge.jpg')] h-screen overflow-y-auto">
      <div className="flex flex-col h-full items-center justify-center">
        <ProfileImg />
        <div className="my-9" />
        <TextField />
        <div className="my-9" />
        {...dummyData.map((data: TodoDataItem) => {
          return <TodoItem key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}
