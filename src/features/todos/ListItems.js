import {useSelector, useDispatch} from 'react-redux'

const selectTodoById = (state, id) => state.todos.find(todo => todo.id === id)

const ListItems = ({id}) => {
    const dispatch = useDispatch()
    const todo = useSelector(state => selectTodoById(state, id))
    const {text, completed} = todo

    const handleChange = () => {
        dispatch({type: 'todos/todoToggled', payload: id})
    }

    return (
        <li>
            <div>
                {text}
                <input
                    type='checkbox'
                    checked={completed}
                    onChange={handleChange}
                />
            </div>
        </li>
    )
}

export default ListItems