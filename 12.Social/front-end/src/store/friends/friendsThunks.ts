import * as actions from './friendsActions';
import axios from 'axios';

export const addOnFriends = (token: string, id: string) => async (dispatch: any) => {
    try {
        await axios.put(`http://localhost:8000/friend/${id}`, null, { headers: { 'Authorization': token } });
    } catch (e) {
        dispatch(actions.getFriendsFailure(e));
    }
}

export const getFriends = (token: string) => async (dispatch: any) => {
    dispatch(actions.getFriendsRequest());
    try {
        const { data } = await axios.get(`http://localhost:8000/friend/getFriends/`, { headers: { 'Authorization': token } });
        dispatch(actions.getFriendsSuccess(data));
    } catch (e) {
        dispatch(actions.getFriendsFailure(e));
    }
}

export const deleteFriend = (token: string, id: string) => async (dispatch: any) => {
    dispatch(actions.getFriendsRequest());
    try {
        const { data } = await axios.delete(`http://localhost:8000/friend/${id}`, { headers: { 'Authorization': token } });
        dispatch(actions.getFriendsSuccess(data));
    } catch (e) {
        dispatch(actions.getFriendsFailure(e));
    }
}



