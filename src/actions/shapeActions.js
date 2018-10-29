import * as types from './all-types';

export function addShape(data) {
    return {
        type: types.ADD_SHAPE,
        payload: data
    }
}

export function removeAllShapes() {
    return {
        type: types.REMOVE_ALL_SHAPES
    }
}

export function removeShape(i) {
    console.log(i);
    return {
        type: types.REMOVE_SHAPE,
        payload: i
    }
}