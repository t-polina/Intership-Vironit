export const initialState = {
    user: {},
    isLoading: false,
    error: ''
}

export const userSelector = ({userReducer}: any) => userReducer.user;
export const isLoadingSelector = ({userReducer}: any) => userReducer.isLoading;
export const errorSelector = ({userReducer}: any) => userReducer.error;