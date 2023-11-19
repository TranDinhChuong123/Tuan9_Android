const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        data: [...state.data, action.text],
      };
    case "REMOVE_TODO":
      const stateRemove = [...state.data];
      const index = stateRemove.indexOf(action.text);
      stateRemove.splice(index, 1);
      return {
        data: stateRemove,
      };
    default:
      return state;
  }
};

export default reducer;
