import * as actions from './actions';
import { headers } from '../../utils/headers'

export const getUserByToken = () => async (dispatch: any) => {
    dispatch(actions.getUserRequest())
    try {
        const { data } = await headers.get(`http://localhost:8000/user/`);
        dispatch(actions.getUserSuccess(data));
    } catch (e) {
        dispatch(actions.getUserFailure(e));
    }
}

export const addNewUser = async (user: any, isRememder: boolean) => {
    const { data } = await headers.post(`http://localhost:8000/user`, user)
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
    const { data } = await headers.post(`http://localhost:8000/user/${login}&${password}`);
    if (data !== '') {
        sessionStorage.setItem('token', data);
        return true;
    }
    else return false;
}

export const deleteUser = async (login: string) => {
    await headers.delete(`http://localhost:8000/user/${login}`);
    localStorage.clear();
    sessionStorage.clear();
}

export const updateUser = (login: string, updateData: any) => async (dispatch: any) => {
    const { data } = await headers.put(`http://localhost:8000/user/${login}`, updateData);
    dispatch(actions.getUserSuccess(data));
}

export const getAllUsers = (character: string) => async (dispatch: any) => {
    const { data } = await headers.put(`http://localhost:8000/user/`, { character: character });
    dispatch(actions.getAllUsers(data));
}

export const setIsLogin = (isLogin: boolean) => async (dispatch: any) => {
    dispatch(actions.setIsLoginActions(isLogin));
}

export const getFoundUser = (loginFoundUser: string) => async (dispatch: any) => {
    const { data } = await headers.get(`http://localhost:8000/user/visitedUser/${loginFoundUser}`);
    dispatch(actions.getVisitedUser(data));
}

export const setIdFriendMessage = (id: string, login: string) => async (dispatch: any) => {
    dispatch(actions.setLoginMessage(login));
    dispatch(actions.setIdFriendMessag(id));
}