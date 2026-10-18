export const getTodosFromLocalStorage = (todos) => {
  const data = localStorage.getItem("todos");

  if (data && data !== "undefined") {
    return JSON.parse(data);
  }
  return [];
};

export const setTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
