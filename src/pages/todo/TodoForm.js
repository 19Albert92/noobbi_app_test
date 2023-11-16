import {useState} from "react";

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            if (todo !== '') {
                addTodo(prevState => [
                        ...prevState,
                        {
                            name: todo,
                            id: prevState.length
                        }
                    ]
                )
                setTodo('');
                setError('');
            } else {
                setError('Поле ввода Пустое!')
            }
        }
    }

    return (
        <div>
            <div className={'form-group mb-3'}>
                <label className={'form-label'} htmlFor={'name'}>Todo Name</label>
                <input type="text" id={'name'}
                       value={todo}
                       onChange={text => setTodo(text.target.value)}
                       className={'form-control'} placeholder={'Enter Todo name'}
                       onKeyDown={handleSubmit}
                />
                <small className={'form-text text-danger'}>{error}</small>

            </div>
        </div>
    )
}
export default TodoForm;
