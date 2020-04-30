import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import { connect } from "react-redux";
import { testAction } from './redux/actions'

function TodoApp({ testAction }) {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <button onClick={testAction}> test </button>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    );
}

export default connect(null, { testAction })(TodoApp)