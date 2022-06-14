import {useSelector, shallowEqual} from 'react-redux'
import ListItems from "./ListItems"

const selectTodoIds = state => state.todos.map(todo => todo.id)

const TodosList = () => {
    const todoIds = useSelector(selectTodoIds, shallowEqual)

    const renderedListItems = todoIds.map(id => (
        <ListItems key={id} id={id}/>
    ))

    return (
        <ul>{renderedListItems}</ul>
    )
}

export default TodosList