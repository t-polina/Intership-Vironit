import * as actions from './friendsActions';
import axios from 'axios';
import { headers } from '../../utils/headers'

export const addOnFriends = (id: string) => async (dispatch: any) => {
    try {

        await headers.put(`http://localhost:8000/friend/${id}`, null);
    } catch (e) {
        dispatch(actions.getFriendsFailure(e));
    }
}

export const getFriends = () => async (dispatch: any) => {
    dispatch(actions.getFriendsRequest());
    try {
        const { data } = await headers.get(`http://localhost:8000/friend/getFriends/`);
        dispatch(actions.getFriendsSuccess(data));
    } catch (e) {
        dispatch(actions.getFriendsFailure(e));
    }
}

export const deleteFriend = (id: string) => async (dispatch: any) => {
    dispatch(actions.deleteUserRequest());
    try {
        const { data } = await axios.delete(`http://localhost:8000/friend/${id}`);
        dispatch(actions.getFriendsSuccess(data));
    } catch (e) {
        dispatch(actions.deleteUserFailure(e));
    }
}
export const sendRequest = (login: string) => async (dispatch: any) => {
    dispatch(actions.sendRequestToUserRequest());
    try {
        headers.post(`http://localhost:8000/friend/${login}`, null);
        dispatch(actions.sendRequestToUserSuccess());
    } catch (e) {
        dispatch(actions.sendRequestToUserFailure(e));
    }
}

export const getRequestUsers = () => async (dispatch: any) => {
    dispatch(actions.getRequestsOfUserRequest());
    try {
        const { data } = await headers.get(`http://localhost:8000/friend/requestUsers`);
        dispatch(actions.getRequestsOfUserSuccess(data));
    } catch (e) {
        dispatch(actions.getRequestsOfUserFailure(e));
    }
}

export const deleteRequest = (id: string) => async (dispatch: any) => {
    dispatch(actions.deleteUserRequest());
    try {
        const { data } = await headers.delete(`http://localhost:8000/friend/request/${id}`);
        dispatch(actions.getRequestsOfUserSuccess(data));
    } catch (e) {
        dispatch(actions.deleteUserFailure(e));
    }
}
