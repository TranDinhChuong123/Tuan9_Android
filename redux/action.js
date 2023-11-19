// ../redux/action
export const addTodo = (value) => ({
  type: "ADD_TODO",
  text: value,
});
export const removeTodo = (value) => ({
  type: "REMOVE_TODO",
  text: value,
});
