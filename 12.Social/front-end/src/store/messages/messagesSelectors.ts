export const initialState = {
    isLoading: false,
    error: '',
    messagesOnDialog: [],
}

export const messagesOnDialogSelector = ({ messagesReducer }: any) => messagesReducer.messagesOnDialog;
export const isLoadingSelector = ({ messagesReducer }: any) => messagesReducer.isLoading;
export const errorSelector = ({ messagesReducer }: any) => messagesReducer.error;
