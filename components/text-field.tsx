import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ProfileImg(props: { addTodoItem: Function }) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);

  function mAddTodoItem() {
    if (inputText === "") {
      setError(true);
      return;
    } else {
      setError(false);

      props.addTodoItem({
        id: "id" + Date.now().toString(),
        task: inputText,
        complete: false,
        completeTime: undefined,
        creationTime: Date.now(),
      });

      setInputText("");
    }
  }

  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex flex-col py-3 px-5 w-1/4 rounded-md transp-background-only-50 shadow-md ">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faBars} size="lg" />

          <div className="mx-1" />
          <input
            className="focus:outline-none grow transp-background-only-0"
            value={inputText}
            placeholder="To do today"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                mAddTodoItem();
              }
            }}
          />

          <div className="mx-1" />
          <div onClick={mAddTodoItem}>
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </div>
        </div>
        {error && <div className="px-6 text-red-500 text-sm">Cannot be empty</div>}
      </div>
    </div>
  );
}
