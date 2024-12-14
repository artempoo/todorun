import { useRef } from "react";
import { jsnToArr } from "./functions";
import InputTask from "./InputTask";

export default function CreateTask({ setDataStorage }) {
  const ref = useRef();

  const objTask = {
    id: 0,
    desc: "",
    isDone: false,
  };

  console.log("инициализировался компонент CreateTask");

  function onSubmit() {
    const jsonStorage = localStorage.getItem("taskList");
    const arr = jsnToArr(jsonStorage);
    objTask.id = arr.length;
    objTask.desc = ref.current.value;
    arr.push(objTask);
    const jsnArr = JSON.stringify(arr);
    localStorage.setItem("taskList", jsnArr);
    setDataStorage(jsnToArr(localStorage.getItem("taskList")));
    ref.current.value = "";
  }

  return (
    <div className="relative bg-red mb-12">
      <InputTask refferer={ref} />
      <button
        onClick={onSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute top-[6px] right-[6px]"
      >
        Add
      </button>
    </div>
  );
}
