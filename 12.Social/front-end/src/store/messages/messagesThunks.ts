import * as actions from './messagesActions';
import axios from 'axios';

export const getDiaologWithUser = (token: string, id: string) => async (dispatch: any) => {
    dispatch(actions.getMessageRequest())
    try {
        const { data } = await axios.get(`http://localhost:8000/message/${id}`, { headers: { 'Authorization': token } });
        dispatch(actions.getMessageSuccess(data));
    } catch (e) {
        dispatch(actions.getMessageFailure(e));
    }
}
export const sendMessage = (messageObj: any, recipient: any, token: any, socket: any, id: string) => async (dispatch: any) => {
    try {
        socket.emit('SEND_MESSAGE', { messageObj: messageObj, recipient: recipient, token: token });
        dispatch(actions.setMessageSuccess({ sender: id, text: messageObj.text }));
    } catch (e) {
        dispatch(actions.setMessageFailure(e));
    }
}
export const setMessageOnRT = (data: any) => async (dispatch: any) => {
    dispatch(actions.setMessageSuccess({ sender: data.sender, text: data.text }));
}