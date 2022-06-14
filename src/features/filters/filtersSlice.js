const initialState = {

}

export default function filtersReducer (state = initialState, action) {
    switch (action.type) {
        case 'filters/filtersChanged': {
            return {
                ...state
            }
        }
        default:
            return state
    }
}