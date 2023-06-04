import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileImg(props: { addTodoItem: Function }) {
  let inputText = "";
  return (
    <div className="flex flex-row w-full justify-center">
      <div className="py-3 px-5 w-1/4 rounded-md transp-background-only-50 shadow-md flex flex-row items-center">
        <FontAwesomeIcon icon={faBars} size="lg" />

        <div className="mx-1" />
        <input
          className="focus:outline-none grow transp-background-only-0"
          onChange={(e) => {
            inputText = e.target.value;
          }}
        />
        <div className="mx-1" />
        <div
          onClick={() =>
            props.addTodoItem({
              id: "id" + Date.now().toString(),
              task: inputText,
              complete: false,
              completeTime: undefined,
              creationTime: Date.now(),
            })
          }
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </div>
      </div>
    </div>
  );
}
