import { AddIcon, DrawerIcon } from "@/icons/icons";

export default function ProfileImg() {
  return (
    <div className="flex flex-row w-full justify-center">
      <div className="py-3 px-5 w-1/4 rounded-md transp-background-only-50 shadow-md flex flex-row">
        <DrawerIcon />
        <div className="mx-1" />
        <input className="focus:outline-none grow transp-background-only-0" />
        <div className="mx-1" />
        <AddIcon />
      </div>
    </div>
  );
}
