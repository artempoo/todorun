import { useState } from "react";
import { jsnToArr } from "./functions";

export default function CreateTask({ setDataStorage }) {
	const [newTask, setNewTask] = useState("");

	const objTask = {
		id: 0,
		desc: "",
		isDone: false,
	};

	function handlerOnchange(event) {
		setNewTask(event.target.value); //обновляем поле input
	}

	function onSubmit() {
		const jsonStorage = localStorage.getItem("taskList");
		const arr = jsnToArr(jsonStorage);
		objTask.id = arr.length;
		objTask.desc = newTask;
		arr.push(objTask);
		const jsnArr = JSON.stringify(arr);
		localStorage.setItem("taskList", jsnArr);
		setDataStorage(jsnToArr(localStorage.getItem("taskList")));
		setNewTask("");
	}

	return (
		<div className="relative bg-red mb-12">
			<input
				type="text"
				onChange={handlerOnchange}
				value={newTask}
				placeholder="Add new task"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			<button
				onClick={onSubmit}
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute top-[6px] right-[6px]"
			>
				Add
			</button>
		</div>
	);
}
