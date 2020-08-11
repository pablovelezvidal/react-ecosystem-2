import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompleteRequest,
} from "./thunks";
import "./TodoList.css";
import {
  getIncompleteTodos,
  getCompletedTodos,
  getTodosLoading,
} from "./selectors";

const TodoList = ({
  incompletedTodos = [],
  completedTodos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h2>Incompleted todos</h2>
      {incompletedTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
          key={todo.id}
        />
      ))}
      <h2>Completed todos</h2>
      {completedTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
          key={todo.id}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  incompletedTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
