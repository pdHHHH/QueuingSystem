import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {
  userName: "duchuy",
  fullName: "Phạm Đức Huy",
  phoneNumber: "0829891853",
  email: "huyducpham2000@gmmail.com",
  password: "4488999",
  role: 0
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

// To able to use reducers we need to export them.
export const { } = userSlice.actions;

export default userSlice.reducer;
