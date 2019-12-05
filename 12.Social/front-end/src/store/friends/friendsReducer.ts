import { initialState } from './friendsSelectors'
import { GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE, GET_FRIENDS_REQUEST, GET_REQUESTS_OF_USER_REQUEST, GET_REQUESTS_OF_USER_SUCCESS, GET_REQUESTS_OF_USER_FAILURE, SEND_REQUESR_TO_USER_REQUEST, SEND_REQUESR_TO_USER_SUCCESS, SEND_REQUESR_TO_USER_FAILURE, DELETE_USER_FAILURE, DELETE_USER_REQUEST } from './friendsActions'

const friendsReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case GET_FRIENDS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friends: payload
            }
        case GET_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case GET_REQUESTS_OF_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_REQUESTS_OF_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case GET_REQUESTS_OF_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                requestsOfUser: payload
            }
        case SEND_REQUESR_TO_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: payload
            }
        case SEND_REQUESR_TO_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }

        case SEND_REQUESR_TO_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
            
        case DELETE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }

        case DELETE_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        default: { return state }
    }
};

export default friendsReducer