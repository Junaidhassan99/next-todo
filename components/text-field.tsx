import { TodoDataItem } from "@/data-types/data-types";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LoadingIndicator from "./loading-indicator";

export default function TextField(props: { addTodoItem: Function }) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);

  async function mAddTodoItem() {
    setIsLoadingAdd(true);
    setError(false);

    if (inputText === "") {
      setIsLoadingAdd(false);
      setError(true);
      return;
    } else {
      setError(false);

      const newData: TodoDataItem = {
        _id: undefined,
        task: inputText,
        complete: false,
        completeTime: 0,
        creationTime: Date.now(),
      };

      await props.addTodoItem(newData);

      setInputText("");
    }

    setIsLoadingAdd(false);
  }

  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex flex-col py-3 px-5 w-3/4 sm:w-1/2 rounded-md transp-background-only-50 shadow-md ">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faBars} size="lg" />

          <div className="mx-1 sm:mx-3" />
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
          {isLoadingAdd ? (
            <LoadingIndicator />
          ) : (
            <div onClick={mAddTodoItem}>
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </div>
          )}
        </div>
        {error && (
          <div className="px-6 text-red-500 text-sm">Cannot be empty</div>
        )}
      </div>
    </div>
  );
}
