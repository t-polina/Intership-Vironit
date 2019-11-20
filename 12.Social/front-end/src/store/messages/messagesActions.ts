export const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST'
export const GET_MESSAGE_SUCCESS= 'GET_MESSAGE_SUCCESS'
export const GET_MESSAGE_FAILURE = 'GET_MESSAGE_FAILURE'
export const SET_MESSAGE_SUCCESS = 'SET_MESSAGE_SUCCESS'
export const SET_MESSAGE_FAILURE = 'SET_MESSAGE_FAILURE'

export const getMessageRequest = () => ({
    type: GET_MESSAGE_REQUEST
})
export const getMessageSuccess = (data: any) => ({
    type: GET_MESSAGE_SUCCESS,
    payload: data
});
export const getMessageFailure = (error: any) => ({
    type: GET_MESSAGE_FAILURE,
    payload: error
});
export const setMessageSuccess = (data: any) => ({
    type: SET_MESSAGE_SUCCESS,
    payload: data
});
export const setMessageFailure = (error: any) => ({
    type: SET_MESSAGE_FAILURE,
    payload: error
});
