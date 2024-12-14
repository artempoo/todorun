import { Provider } from "react-redux";

export default function InputTask({ refferer }) {
  console.log("инициализировался компонент InputTask");

  return (
    <input
      type="text"
      ref={refferer}
      defaultValue=""
      placeholder="Add new task"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  );
}
