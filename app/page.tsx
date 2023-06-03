import ProfileImg from "@/components/profile-img";
import TextField from "@/components/text-field";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="bg-cover bg-[url('/images/san-bridge.jpg')] h-screen overflow-y-auto">
      <div className="flex flex-col h-full items-center justify-center">
        <ProfileImg />
        <div className="my-9" />
        <TextField />
      </div>
    </div>
  );
}
