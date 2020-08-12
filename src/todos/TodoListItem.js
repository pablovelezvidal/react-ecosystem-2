import React from "react";
import styled from "styled-components";

const TodoListItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Butoon = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

const CompletedButoon = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButoon = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <TodoListItemContainer>
    <h3>{todo.text}</h3>
    <ButtonsContainer>
      {todo.isCompleted ? null : (
        <CompletedButoon
          onClick={() => onCompletedPressed(todo.id)}
          className="completed-button"
        >
          Mark As Completed
        </CompletedButoon>
      )}
      <RemoveButoon
        onClick={() => onRemovePressed(todo.id)}
        className="remove-button"
      >
        Remove
      </RemoveButoon>
    </ButtonsContainer>
  </TodoListItemContainer>
);

export default TodoListItem;
