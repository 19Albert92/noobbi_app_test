const TodoItem = ({todo}) => {
    if (todo) {
        return (
            // <div></div>
            <div>{todo.id}. {todo.name}</div>
        )
    }
}
export default TodoItem;
