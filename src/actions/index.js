// export const action_types = {
//     ADD_CAT: 'ADD_CAT',
//     ADD_ITEM: 'ADD_ITEM'
// }

// export const actionAddCategory = (cat) => {
//     return { type: action_types.ADD_CAT, cat: cat}
// }

export const ADD_CAT = 'ADD_CAT';

export function addCat(cats) {
    return {
        type: ADD_CAT,
        cats
    }
}

export function getCategories() {
    return dispatch => {
        fetch('http://localhost:3001/api/category')
            .then(res => res.json())
            .then(data => {dispatch(addCat(data))})
    }
}