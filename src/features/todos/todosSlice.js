import { client } from "../../api/client"

const initialState = [
    // {id: 0, text: 'Clean house', completed: false},
    // {id: 1, text: 'Do homeworks', completed: true},
    // {id: 2, text: 'Shopping', completed: false},
]

const nextTodoId = todos => {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1
}

export default function todosReducer (state = initialState, action) {
    switch (action.type) {
        case 'todos/todosLoaded': {
            return action.payload
        }
        case 'todos/todoAdded': {
            return [
                ...state,
                action.payload
            ]
        }
        case 'todos/todoToggled': {
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }
        default:
            return state
    }
}

export async function fetchTodos(dispatch, getState) {
    const response = await client.get('/fakeApi/todos')
    console.log(response);
    dispatch({type: 'todos/todosLoaded', payload: response.todos})
}

export function saveNewTodo(text) {
    return async function saveNewTodoThunk(dispatch, getState) {
        const initialTodo = {text}
        const response = await client.post('/fakeApi/todos', {todo: initialTodo})
        console.log('Before dispatch: ', getState());
        dispatch({type: 'todos/todoAdded', payload: response.todo})
        console.log('After dispatch: ', getState());
    }
}