import uuid from "uuid/dist/v1";

export const cartReduser = (state, action) => {
	switch (action.type) {
		case "ADD_PACK":
			return [
				...state,
				{
					id: uuid(),
					pack: action.pack.pack,
					quantity: action.pack.quantity,
				},
			];
		case "REMOVE_PACK":
			return state.filter((items) => items.id !== action.id);
		default:
			return state;
	}
};
