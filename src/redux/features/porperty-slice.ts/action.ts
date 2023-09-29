import Api from "../../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {endpoints} from "../../../services/endpoints/properties"

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


export const filterproperties=createAsyncThunk(
    "property/filterproperties",
    async(filter:{city:string,date:string,price:number | number[],type:string},{rejectWithValue})=>{
         try{
             const res=await Api.get(endpoints.properties.filter,{
                params:{
                   city:filter.city,
                   date:filter.date,
                   price:filter.price,
                   type:filter.type
                }
             })

             console.log(res.data.data)
             if(res.data.success){
                 return  res.data.data
             }
         }catch(err){
             rejectWithValue(err);
         }
    }
 )