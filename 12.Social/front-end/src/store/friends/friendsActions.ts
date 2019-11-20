export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_REQUEST = 'GET_FRIENDS_REQUEST'
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE'

export const getFriendsRequest = () => ({
    type: GET_FRIENDS_REQUEST
});
export const getFriendsSuccess = (friends: any) => ({
    type: GET_FRIENDS_SUCCESS,
    payload: friends
});
export const getFriendsFailure = (error: any) => ({
    type: GET_FRIENDS_FAILURE,
    payload: error,
});

