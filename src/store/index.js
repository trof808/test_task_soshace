import { createStore, combineReducers } from 'redux';
// import { action_types } from '../actions';

export const action_types = {
    ADD_CAT: 'ADD_CAT',
    ADD_ITEM: 'ADD_ITEM'
}

const addCat = (cats = [], action) => {
    switch(action.type) {
        case action_types.ADD_CAT:
            return [...cats, action.cats];
        default:
            return cats;
    }
};

const reducers = combineReducers({
  addCat
});

export const store = createStore(reducers);