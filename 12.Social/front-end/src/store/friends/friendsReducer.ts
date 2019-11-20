import { initialState } from './friendsSelectors'
import { GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE, GET_FRIENDS_REQUEST} from './friendsActions'

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
        default: { return state }
    }
};

export default friendsReducer