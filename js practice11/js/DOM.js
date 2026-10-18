import { todoKeys } from "./constants.js";
import { completeTodoById, createTodo, deleteTodoById } from "./service.js";
import { setTodosToLocalStorage } from "./storage.js";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosArea = document.querySelector(".todos");

const createTodoElement = (todo) => {
  const todoArea = document.createElement("li");
  todoArea.classList.add("todo");
  todoArea.dataset.id = todo[todoKeys.id];
  todoArea.innerHTML = `
          <div class="todo-text">${todo[todoKeys.text]}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>
      `;
  return todoArea;
};

export const renderTodos = (todos) => {
  todosArea.innerHTML = "";
  todos.forEach((todo) => {
    const todoArea = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoArea.classList.add("completed");
    }
    todosArea.prepend(todoArea);
  });
};

export const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoArea = createTodoElement(todo);
  todosArea.prepend(todoArea);
};

export const initTodoHandlers = (todos) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (text == "") {
      return;
    }

    handleCreateTodo(todos, text);
    input.value = "";
  });

  todosArea.addEventListener("click", (event) => {
    const todo = event.target.closest(".todo");
    if (!todo) return;

    const datasetId = Number(todo.dataset.id);

    if (event.target.matches(".button-complete")) {
      completeTodoById(todos, datasetId);
      setTodosToLocalStorage(todos);
      todo.classList.toggle("completed");
    }
    if (event.target.matches(".button-delete")) {
      deleteTodoById(todos, datasetId);
      setTodosToLocalStorage(todos);
      todo.remove();
    }
  });
};
