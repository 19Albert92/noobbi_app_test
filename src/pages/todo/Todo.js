import styles from "../todo/Todo.module.scss";
import {TodoForm, TodoItem, TodoList} from "./index";
import {useState} from "react";


const Todo = () => {

    const [todos, setTodos] = useState([]);

    return (
        <div className={styles.todo}>
            <TodoForm addTodo={setTodos}/>
            <TodoList todos={todos}/>
            <TodoItem/>
        </div>
    )
}

export default Todo
