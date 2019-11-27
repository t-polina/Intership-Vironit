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
        const { data } = await headers.get(`http://localhost:8000/friend/getFriends/` );
        dispatch(actions.getFriendsSuccess(data));
    } catch (e) {
        dispatch(actions.getFriendsFailure(e));
    }
}

export const deleteFriend = (id: string) => async (dispatch: any) => {
    dispatch(actions.getFriendsRequest());
    try {
        const { data } = await axios.delete(`http://localhost:8000/friend/${id}`);
        dispatch(actions.getFriendsSuccess(data));
    } catch (e) {
        dispatch(actions.getFriendsFailure(e));
    }
}



