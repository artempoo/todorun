const persons = (state = [], action) => {
	switch (action.type) {
		case "ADD_PERSON":
			return [
				...state,
				{
					name: action.person.name,
					secondName: action.person.secondName,
					lastName: action.person.lastName,
				},
			];
		default:
			return state;
	}
};

export default persons;
