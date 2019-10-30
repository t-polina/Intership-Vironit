import { initialState } from './selectors'
import { GET_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST } from './actions'

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
        default: { return state }
    }
};

export default userReducer