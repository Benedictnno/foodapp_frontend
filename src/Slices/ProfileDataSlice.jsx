import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customUrl from "../Utils/axios";
import { toast } from "react-toastify";

const initialState={
    profileDatas:[],
    isLoading:false,
    isDeleted:false,
    successful: false,
}


export const getAllProfiles = createAsyncThunk(
  "getAllProfiles",
  async (_, thunkAPI) => {
    try {
        const resp = await customUrl.get('/')
        return resp
    } catch (error) {
        console.log(error);
    }
  }
);
export const AddProfiles = createAsyncThunk("AddProfiles", async (data, thunkAPI) => {
  try {
    
    const resp = await customUrl.post("/", data);
    return resp;
  } catch (error) {
    console.log(error);
  }
});

export const deleteProfile = createAsyncThunk(
  "deleteProfile",
  async (id, thunkAPI) => {
    try {
       await customUrl.delete(`/${id}`);
            toast.error("deleted successfully");
      
    } catch (error) {
      console.log(error);
    }
  }
);


const ProfileDataSlice = createSlice({
    name:'Profile data',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
          .addCase(getAllProfiles.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getAllProfiles.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.profileDatas = payload.data.meals;
          })
          .addCase(getAllProfiles.rejected, (state) => {
            state.isLoading = false;
          })
          .addCase(AddProfiles.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(AddProfiles.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.successful = true;
            toast.success('Added successfully')
          })
          .addCase(AddProfiles.rejected, (state) => {
            state.isLoading = false;
          })
          .addCase(deleteProfile.pending, (state) => {

            state.isDeleted = true;
          })
          .addCase(deleteProfile.fulfilled, (state, { payload }) => {
            state.isDeleted = true;
            state.successful = true;
          })
          .addCase(deleteProfile.rejected, (state) => {
            state.isLoading = false;
          });
    }

})

export default ProfileDataSlice.reducer