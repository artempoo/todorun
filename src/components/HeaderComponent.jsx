import { memo } from "react";

const HeaderComponent = memo(function HeaderComponent() {
	console.log("инициализировался компонент HeaderComponent");

	return (
		<h1 className="text-3xl font-bold text-white p-4 mb-8">
			to-to-ru-to-do list
		</h1>
	);
});

export default HeaderComponent;
