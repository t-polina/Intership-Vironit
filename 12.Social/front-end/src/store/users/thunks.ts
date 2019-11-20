import * as actions from './actions';
import axios from 'axios';

export const getUserByToken = (token: string) => async (dispatch: any) => {
    dispatch(actions.getUserRequest())
    try {
        const header = { 'Authorization': token }
        const { data } = await axios.get(`http://localhost:8000/user/`, { headers: header });
        dispatch(actions.getUserSuccess(data));
    } catch (e) {
        dispatch(actions.getUserFailure(e));
    }
}
export const addNewUser = async (user: any, isRememder: boolean) => {
    const { data } = await axios.post(`http://localhost:8000/user`, user)
    if (data !== '' && isRememder) {
        localStorage.setItem('token', data);
        return true;
    }
    else if (data !== '' && !isRememder) {
        sessionStorage.setItem('token', data);
        return true;
    }
    else return false;
}
export const setToken = async (login: string, password: string) => {
    const { data } = await axios.post(`http://localhost:8000/user/${login}&${password}`);
    if (data !== '') {
        sessionStorage.setItem('token', data);
        return true;
    }
    else return false;
}
export const deleteUser = async (login: string) => {
    await axios.delete(`http://localhost:8000/user/${login}`);
    localStorage.clear();
    sessionStorage.clear();
}
export const updateUser = (login: string, updateData: any, token: string) => async (dispatch: any) => {
    const header = { 'Authorization': token }
    const { data } = await axios.put(`http://localhost:8000/user/${login}`, updateData, { headers: header });
    dispatch(actions.getUserSuccess(data));
}
export const getAllUsers = () => async (dispatch: any) => {
    const { data } = await axios.get(`http://localhost:8000/user/get`);
    dispatch(actions.getAllUsers(data));
}
export const setRequest = (login: string, token: string) => {
    const header = { 'Authorization': token }
    axios.post(`http://localhost:8000/user/friend/${login}`, null, { headers: header });
}
export const setIsLogin = (isLogin: boolean) => async (dispatch: any) => {
    dispatch(actions.setIsLoginActions(isLogin));
}
export const setVisitedUser = (visitedUserLogin: string) => async (dispatch: any) => {
    const { data } = await axios.get(`http://localhost:8000/user/visitedUser/${visitedUserLogin}`);
    dispatch(actions.getVisitedUser(data));
}
export const getRequestUsers = (token: string) => async (dispatch: any) => {
    const { data } = await axios.get(`http://localhost:8000/friend/requestUsers`, { headers: { 'Authorization': token } });
    dispatch(actions.getRequestUsers(data));
}
export const deleteRequest = (token: string, id: string) => async (dispatch: any) => {
    const { data } = await axios.delete(`http://localhost:8000/friend/request/${id}`, { headers: { 'Authorization': token } });
    dispatch(actions.getRequestUsers(data));
}
export const setIdFriendMessage = (id: string, login: string) => async (dispatch: any) => {
    dispatch(actions.setLoginMessage(login));
    dispatch(actions.setIdFriendMessag(id));
}