import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  profile: Record<string, any> | UserProfile;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const initialState: UserState = {
  profile: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
    removeProfile: (state) => {
      state.profile = {};
    },
    updateProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { setProfile, removeProfile, updateProfile } = userSlice.actions;
export default userSlice.reducer;
