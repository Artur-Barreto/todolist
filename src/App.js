import React from "react";
import "./index.css";
import "./reset.css";
import Todo from "./components/Todo";


function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoList da Quarentena</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            O que fazer na pandemia ?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Adicionar Task
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>Todas</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Ativas</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completas</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">Atividades Feitas Jul/2020</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <Todo name="Comer" completed={true} id="todo-0" />
        <Todo name="Dormir" completed={false} id="todo-1" />
        <Todo name="Estudar" completed={false} id="todo-2" />
      </ul>
    </div>
  );
}
export default App;
