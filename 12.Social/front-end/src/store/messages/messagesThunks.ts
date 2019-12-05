import * as actions from './messagesActions';
import { headers } from '../../utils/headers'
import socket from '../../utils/soket'
const socket1 = socket();

export const getDiaologWithUser = (id: string, startIndex: number) => async (dispatch: any) => {
    dispatch(actions.getMessageRequest());
    try {
        const { data } = await headers.get(`http://localhost:8000/message/${id}&${startIndex}`);
        data.map((el: any): void => {
            dispatch(actions.getMessageSuccess(el));
        })


    } catch (e) {
        dispatch(actions.getMessageFailure(e));
    }
}
export const sendMessage = (messageObj: any, recipient: string, token: string, isJoin: boolean) => async (dispatch: any) => {
    try {
        socket1.emit('SEND_MESSAGE', { messageObj: messageObj, recipient: recipient, token: token, isJoin: isJoin});
    } catch (e) {
        dispatch(actions.setMessageFailure(e));
    }
}
export const getUserDialogs = () => async (dispatch: any) => {
    try {
        const { data } = await headers.get(`http://localhost:8000/message/`);
        data.map((el: any): void => {
            dispatch(actions.getUserRoomSuccess(el.room));
        })
    } catch (e) {
        dispatch(actions.setMessageFailure(e));
    }
}
export const setMessageOnRT = (data: any) => async (dispatch: any) => {
    console.log(data)
    dispatch(actions.setMessageSuccess({ sender: data.sender, text: data.text }));
}