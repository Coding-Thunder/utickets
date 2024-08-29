// store/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    fullName: string;
    email: string;
}

const initialState: UserState = {
    fullName: '',
    email: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.fullName = '';
            state.email = '';
        },
    },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
