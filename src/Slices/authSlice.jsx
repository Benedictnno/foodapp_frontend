import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customUrl from "../Utils/axios";
import {
  addUserToLocalStorage,
  getUserfromLocalStorage,
} from "../Utils/localStorage";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserfromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const reps = await customUrl.post("auth/register", user);

     
      return reps.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    
    try {
      const reps = await customUrl.post("auth/login", user);
      return reps.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const auth = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // register user
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      // login user
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        // const { user } = payload;
        state.isLoading = false;
        state.user = payload;
        addUserToLocalStorage(payload);
        toast.success(`Welcome Back ${payload.user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = auth.actions;

export default auth.reducer;
