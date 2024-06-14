import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  isLoggedIn: boolean;
  token: string | null;
}

const initialState: CustomerState = {
  isLoggedIn: false,
  token: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = customerSlice.actions;
export default customerSlice.reducer;
