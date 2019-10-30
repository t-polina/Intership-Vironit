export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'


export const getUserRequest = () => ({
    type: GET_USER_REQUEST,
})

export const getUserSuccess = (user: any) => ({
    type: GET_USER_SUCCESS,
    payload: user
})

export const getUserFailure = (error: any) => ({
    type: GET_USER_FAILURE,
    payload: error
});

