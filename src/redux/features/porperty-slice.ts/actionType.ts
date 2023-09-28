import Api from "../../../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {endpoints} from "../../../../services/endpoints/properties"

export const getAllproperties=createAsyncThunk(
   "property/getAllproperties",
   async(_,{rejectWithValue})=>{
        try{
            const res=await Api.get(endpoints.properties.getAllproperties)
            if(res.data.success){
                return  res.data.data
            }
        }catch(err){
            rejectWithValue(err);
        }
   }
)