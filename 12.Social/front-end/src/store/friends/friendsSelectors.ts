export const initialState = {
    isLoading: false,
    error: '',
    friends: []
}
export const friendsSelector = ({ friendsReducer }: any) => friendsReducer.friends;
export const isLoadingSelector = ({ friendsReducer }: any) => friendsReducer.isLoading;
export const errorSelector = ({ friendsReducer }: any) => friendsReducer.error;
