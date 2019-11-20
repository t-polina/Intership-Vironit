import { initialState } from './selectors'
import { GET_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_ALL_USERS_SUCCESS, GET_IS_LOGIN, GET_VISITED_USER_SUCCESS, GET_REQUEST_USER_SUCCESS, SET_FRIENDS, SET_LOGIN_MESSAGE } from './actions'

const userReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                allUsers: payload
            }
        case GET_IS_LOGIN:
            return {
                ...state,
                isLogin: payload
            }
        case GET_VISITED_USER_SUCCESS:
            return {
                ...state,
                visitedUser: payload
            }
        case GET_REQUEST_USER_SUCCESS:
            return {
                ...state,
                requestUsers: payload
            }
        case SET_FRIENDS:
            return {
                ...state,
                idMessage: payload
            }
        case SET_LOGIN_MESSAGE: {
            return {
                ...state,
                messageLogin: payload
            }
        }
        default: { return state }
    }
};

export default userReducer