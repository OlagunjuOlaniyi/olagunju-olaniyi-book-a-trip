export const initialState = {
  basket: [],
  search: [],
};

const reducer = (state, action) => {
  // console.log("action", action);

  switch (action.type) {
    case "ADD_TO_SEARCH":
      return {
        ...state,
        search: [...state.search, action.item],
      };

    case "EMPTY_SEARCH":
      return {
        ...state,
        search: [],
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
