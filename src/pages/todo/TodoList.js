import styles from './Todo.module.scss';
import {TodoItem} from "./index";
const TodoList = ({todos}) => {
    if (todos.length > 0) {
        return(
            <div className={styles.todo_list}>
                {todos.map(todo =>
                    <TodoItem todo={todo} key={todo.id}/>
                )}
            </div>
        )
    } else {
        return (
            <h3>Список пуст</h3>
        )
    }
}
export default TodoList;
