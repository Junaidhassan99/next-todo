import { TodoDataItem } from "@/data-types/data-types";

export default function TodoItem(props: { data: TodoDataItem }) {
  return (
    <div >
      <div className="py-2 px-5">{props.data.task}</div>
      <hr className="solid"></hr>
    </div>
  );
}
