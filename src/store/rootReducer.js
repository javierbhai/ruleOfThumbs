import { combineReducers } from "redux";

let initialState;

initialState = {
    loading: false,
    thumbs: []
};

export const loadThumbsAction = () => ({ type: 'LOAD_THUMBS' })

export const loadThumbsSuccessAction = results => ({ type: 'LOAD_THUMBS_SUCCESS', payload: results })

export const loadThumbsAsyncAction = () => async dispatch => {
    dispatch(loadThumbsAction())

    const response = await fetch("https://616e2f49a83a850017caa84c.mockapi.io/api/v1/thumbs")
    const data = await response.json();
    const thumbsData = data[0].data;
    console.log("Thumbs Data", thumbsData);

    dispatch(loadThumbsSuccessAction(thumbsData))
}

const thumbsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_THUMBS':
            return { ...state, loading: true }
        case 'LOAD_THUMBS_SUCCESS':
            return { ...state, loading: false, thumbs: action.payload }
        default:
            return {...state}
    }
}

export const rootReducer = combineReducers({
    thumbs: thumbsReducer
})