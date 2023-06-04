import { TodoDataItem } from "@/data-types/data-types";
import { CheckOutlineIcon, DeleteIcon } from "@/icons/icons";

export default function TodoItem(props: { data: TodoDataItem }) {
  return (
    <div>
      <div className="py-2 px-5 flex flex-row justify-between">
        <CheckOutlineIcon />
        <div className="mx-1" />
        <div className="grow">{props.data.task}</div>
        <div className="mx-1" />
        <DeleteIcon />
      </div>
      <hr className="solid"></hr>
    </div>
  );
}
