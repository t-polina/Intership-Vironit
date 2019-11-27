export const initialState = {
    isLoading: false,
    error: '',
    messagesOnDialog: [],
    rooms:[]
}

export const messagesOnDialogSelector = ({ messagesReducer }: any) => messagesReducer.messagesOnDialog;
export const roomsSelector = ({ messagesReducer }: any) => messagesReducer.rooms;
export const isLoadingSelector = ({ messagesReducer }: any) => messagesReducer.isLoading;
export const errorSelector = ({ messagesReducer }: any) => messagesReducer.error;