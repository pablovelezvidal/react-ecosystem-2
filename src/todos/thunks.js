import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markTodoAsCompleted,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };
    const response = await fetch("http://localhost:8080/todos", options);
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    displayAlert(error);
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`http://localhost:8080/todos/${id}`, options);
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (error) {
    displayAlert(error);
  }
};

export const markTodoAsCompleteRequest = (id) => async (dispatch) => {
  try {
    // onst body = JSON.stringify({ ...todo, isCompleted: true });
    const options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      // body,
    };
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      options
    );
    const todo = await response.json();
    dispatch(markTodoAsCompleted(todo));
  } catch (error) {
    displayAlert(error);
  }
};
