export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USER_SUCCESS'
export const GET_IS_LOGIN = 'GET_IS_LOGIN'
export const GET_VISITED_USER_SUCCESS = 'GET_VISITED_USER_SUCCESS'
export const GET_REQUEST_USER_SUCCESS = 'GET_REQUEST_USER_SUCCESS'
export const SET_FRIENDS = 'SET_FRIENDS'
export const SET_LOGIN_MESSAGE = 'SET_LOGIN_MESSAGE'

export const getUserRequest = () => ({
    type: GET_USER_REQUEST,
})

export const getAllUsers = (users: any) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: users
})

export const getUserSuccess = (user: any) => ({
    type: GET_USER_SUCCESS,
    payload: user
})

export const getUserFailure = (error: any) => ({
    type: GET_USER_FAILURE,
    payload: error
});

export const setIsLoginActions = (login: any) => ({
    type: GET_IS_LOGIN,
    payload: login
});
export const getVisitedUser = (visitedUser: any) => ({
    type: GET_VISITED_USER_SUCCESS,
    payload: visitedUser
});

export const setIdFriendMessag = (id: any) => ({
    type: SET_FRIENDS,
    payload: id
});

export const setLoginMessage = (data: any) => ({
    type: SET_LOGIN_MESSAGE,
    payload: data
})
