import { TodoDataItem } from "@/data-types/data-types";
import {
  faCircle,
  faTrash,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TodoItem(props: {
  data: TodoDataItem;
  deleteTodoItem: Function;
  togglecompleteTodoItem: Function;
}) {
  return (
    <div>
      <div className="py-2 px-5 flex flex-row justify-between items-center">
        <div onClick={() => props.togglecompleteTodoItem(props.data.id)}>
          {props.data.complete ? (
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="lg"
              className="border-black border-2 rounded-2xl"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircle}
              size="lg"
              className="text-white border-black border-2 rounded-2xl"
            />
          )}
        </div>

        {/* <div>X</div> */}
        <div className="mx-1" />
        <div className="grow">{props.data.task}</div>
        <div className="mx-1" />
        <div onClick={() => props.deleteTodoItem(props.data.id)}>
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </div>
        {/* <div>X</div> */}
      </div>
      <hr className="solid"></hr>
    </div>
  );
}
