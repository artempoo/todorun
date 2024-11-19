export function jsnToArr(string) {
	const arr = [];
	if (string !== null) {
		const jsn = JSON.parse(string);
		for (let item of jsn) {
			arr.push(item);
		}
	}
	return arr;
}
