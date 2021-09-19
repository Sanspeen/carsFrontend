
export function reducer(state, action) {
    switch (action.type) {
        case 'update-list-category':
            return { ...state, cars : {list: action.list} }
        default:
        return state;
    }
}
