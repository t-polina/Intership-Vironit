import { initialState } from './messagesSelectors'
import { GET_MESSAGE_REQUEST, GET_MESSAGE_SUCCESS, GET_MESSAGE_FAILURE, SET_MESSAGE_SUCCESS, SET_MESSAGE_FAILURE, GET_USER_ROOMS_SUCCESS } from './messagesActions';

const messagesReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case GET_MESSAGE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_MESSAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                messagesOnDialog: [payload, ...state.messagesOnDialog]
            }
        case GET_MESSAGE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case SET_MESSAGE_SUCCESS:
            return {
                ...state,
                messagesOnDialog: [...state.messagesOnDialog, payload]
            }
        case SET_MESSAGE_FAILURE:
            return {
                ...state,
                error: payload
            }
        case GET_USER_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: [...state.rooms, payload]
            }
        default: { return state }
    }
};

export default messagesReducer