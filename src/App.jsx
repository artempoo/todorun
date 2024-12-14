import React from "react";
import { useState } from "react";
import "./App.css";
import "./assets/css/global.css";
import PaneTask from "./components/PaneTask";
import { jsnToArr } from "./components/functions";
import CreateTask from "./components/CreateTask";
import HeaderComponent from "./components/HeaderComponent";

function App() {
	const [dataStorage, setDataStorage] = useState(
		jsnToArr(localStorage.getItem("taskList")),
	);

	return (
		<div className="p-6 max-w-[768px] mx-auto">
			<HeaderComponent />

			<CreateTask setDataStorage={setDataStorage} />

			{dataStorage &&
				dataStorage.map((task) => (
					<PaneTask
						id={task.id}
						arrState={dataStorage}
						setDataStorage={setDataStorage}
						key={task.desc + task.id}
						desc={task.desc}
					/>
				))}
		</div>
	);
}

export default App;
