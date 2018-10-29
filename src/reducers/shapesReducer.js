import * as types from '../actions/all-types';

const initialState = [];

const shapesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_SHAPE :
            return [...state, action.payload];
        case types.REMOVE_ALL_SHAPES :
            return [];
        case types.REMOVE_SHAPE :
            return [...state].filter((c, i) => action.payload !== i);
        default :
            return state
    }
};

export default shapesReducer