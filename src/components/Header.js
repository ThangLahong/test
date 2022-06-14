import {useState} from 'react'
import {useDispatch} from 'react-redux'

import { saveNewTodo } from '../features/todos/todosSlice'

const Header = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleKeyDown = e => {
        const trimmedText = e.target.value.trim()
        if (e.which === 13 && trimmedText) {
            dispatch(saveNewTodo(trimmedText))
            setText('')
        }
    }

    return (
        <input
            type='text'
            placeholder='Enter something todo ...'
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus={true}
        />
    )
}

export default Header