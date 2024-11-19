import backetImg from "../assets/img/trash-bold-svgrepo-com.svg";
import { useState } from "react";

export default function PaneTask({ id, desc, arrState, setDataStorage }) {
  const [checkboxState, setCheckbox] = useState(arrState[id].isDone);

  function handlerText(event) {
    arrState[id].desc = event.target.value;
    setDataStorage(arrState);
    localStorage.setItem("taskList", JSON.stringify(arrState));
  }

  function handlerRemove() {
    const arr = [];
    let ind = 0;
    for (let [i, value] of arrState.entries()) {
      if (i !== id) {
        value.id = ind;
        arr.push(value);
        ind++;
      }
    }
    const result = arr.length >= 1 ? arr : [];
    const jsn = JSON.stringify(result);
    setDataStorage(result);
    localStorage.setItem("taskList", jsn);
  }

  function handleCheckbox() {
    setCheckbox((state) => !state);
    arrState[id].isDone = arrState[id].isDone === false ? true : false;
    setDataStorage(arrState);
    localStorage.setItem("taskList", JSON.stringify(arrState));
  }

  return (
    <div className="transition duration-150 ease-in-out flex justify-between items-center rounded-lg p-6 mb-2 bg-white">
      <div className="flex items-center">
        <input
          checked={checkboxState}
          id={"checkbox-" + id}
          type="checkbox"
          onChange={handleCheckbox}
          value=""
          className="focus:outline-none w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <textarea
        onChange={handlerText}
        defaultValue={desc}
        disabled={checkboxState}
        className={`w-[90%] !disabled:bg-none focus:outline-none focus:text-blue-400 text-[16px] font-semibold px-3 h-[25px] resize-none overflow-hidden ${checkboxState ? `line-through` : null}`}
      ></textarea>

      <button onClick={handlerRemove} className="hover:cursor-pointer">
        <img src={backetImg} width={18} height={18} alt="delete" />
      </button>
    </div>
  );
}
