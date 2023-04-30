import { createSlice } from '@reduxjs/toolkit';

type UserState = {
  currentUser: {
    name: string;
  } | null;
};

const initialState = {
  currentUser: null,
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.currentUser = { name: 'Gustavo' };
    },
    logout: () => initialState,
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
