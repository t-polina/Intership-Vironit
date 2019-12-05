export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_REQUEST = 'GET_FRIENDS_REQUEST'
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE'

export const GET_REQUESTS_OF_USER_REQUEST = 'GET_REQUESTS_OF_USER_REQUEST'
export const GET_REQUESTS_OF_USER_SUCCESS = 'GET_REQUESTS_OF_USER_SUCCESS'
export const GET_REQUESTS_OF_USER_FAILURE = 'GET_REQUESTS_OF_USER_FAILURE'

export const SEND_REQUESR_TO_USER_REQUEST = 'SEND_REQUESR_TO_USER_REQUEST'
export const SEND_REQUESR_TO_USER_SUCCESS = 'SEND_REQUESR_TO_USER_SUCCESS'
export const SEND_REQUESR_TO_USER_FAILURE = 'SEND_REQUESR_TO_USER_FAILURE'

export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'

export const getFriendsRequest = () => ({
    type: GET_FRIENDS_REQUEST
});
export const getFriendsSuccess = (friends: any) => ({
    type: GET_FRIENDS_SUCCESS,
    payload: friends
});
export const getFriendsFailure = (error: Error) => ({
    type: GET_FRIENDS_FAILURE,
    payload: error
});

export const getRequestsOfUserRequest = () => ({
    type: GET_REQUESTS_OF_USER_REQUEST
});
export const getRequestsOfUserSuccess = (data: any) => ({
    type: GET_REQUESTS_OF_USER_SUCCESS,
    payload: data
});
export const getRequestsOfUserFailure = (error: Error) => ({
    type: GET_REQUESTS_OF_USER_FAILURE,
    payload: error
});


export const sendRequestToUserRequest = () => ({
    type: SEND_REQUESR_TO_USER_REQUEST
});
export const sendRequestToUserSuccess = () => ({
    type: SEND_REQUESR_TO_USER_SUCCESS 
});
export const sendRequestToUserFailure = (error: Error) => ({
    type: SEND_REQUESR_TO_USER_FAILURE,
    payload: error
});

export const deleteUserRequest = () => ({
    type: DELETE_USER_REQUEST
});
export const deleteUserFailure = (error: Error) => ({
    type: DELETE_USER_FAILURE,
    payload: error
});