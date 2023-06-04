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
      <div className="flex flex-col h-full items-center">
        <div className="my-5" />
        <ProfileImg />
        <div className="my-5" />
        <TextField />
        <div className="my-3" />
        <div className="py-2 rounded-md bg-white w-1/4 transp-background-only-80 shadow-md">
          {...dummyData
            .sort(function (a, b) {
              return a.creationTime - b.creationTime;
            })
            .map((data: TodoDataItem) => {
              return <TodoItem key={data.id} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
}
