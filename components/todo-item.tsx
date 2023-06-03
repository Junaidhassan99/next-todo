import { TodoDataItem } from "@/data-types/data-types";

export default function TodoItem(props: { data: TodoDataItem }) {
  return <div>{props.data.task}</div>;
}
