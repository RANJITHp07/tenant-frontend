import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import {endpoints} from "../../../services/endpoints/user"
import Api from "../../../services/api";


export const signUp=createAsyncThunk(
    "user/signUp"
    ,async(user,{rejectWithValue})=>{
     try{
       const res=await Api.post(endpoints.user.signup,{user});
       if(res?.data.success){
          return res.data.message
       }else{
          return res.data.message
       }
     }catch(err){
        rejectWithValue(err)
     }
})