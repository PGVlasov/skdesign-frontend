import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces/usersInterface';


interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        updateUsers(state, action: PayloadAction<IUser>) {
            state.isLoading = false
            state.error = ''
            state.users = [action.payload, ...state.users]
        },
    }
});

export default userSlice.reducer;
