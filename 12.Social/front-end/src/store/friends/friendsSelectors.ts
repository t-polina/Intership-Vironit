export const initialState = {
    isLoading: false,
    error: '',
    friends: [],
    requestsOfUser: []
}
export const friendsSelector = ({ friendsReducer }: any) => friendsReducer.friends;
export const isLoadingSelector = ({ friendsReducer }: any) => friendsReducer.isLoading;
export const errorSelector = ({ friendsReducer }: any) => friendsReducer.error;
export const requestsOfUserSelector = ({ friendsReducer }: any) => friendsReducer.requestsOfUser;
