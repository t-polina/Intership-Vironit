export const initialState = {
    user: {},
    allUsers: [],
    isLoading: false,
    error: '',
    isLogin: false,
    visitedUser: {},
    requestUsers: [],
    idMessage: '',
    messageLogin: ''
}

export const userSelector = ({ userReducer }: any) => userReducer.user;
export const messageLoginSelector = ({ userReducer }: any) => userReducer.messageLogin;
export const visitedUserSelector = ({ userReducer }: any) => userReducer.visitedUser;
export const requestUsersSelector = ({ userReducer }: any) => userReducer.requestUsers;
export const isLoginSelector = ({ userReducer }: any) => userReducer.isLogin;
export const allUsersSelector = ({ userReducer }: any) => userReducer.allUsers;
export const isLoadingSelector = ({ userReducer }: any) => userReducer.isLoading;
export const errorSelector = ({ userReducer }: any) => userReducer.error;
export const idMessageSelector = ({ userReducer }: any) => userReducer.idMessage;