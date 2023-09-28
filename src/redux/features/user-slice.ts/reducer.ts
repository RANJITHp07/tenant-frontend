import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { signUp } from "./action";

interface InitalState{
    data:string
    loading:boolean
    err:any
}

const initialState:InitalState={
    data:'',
    loading:false,
    err:null
}

const user=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
         builder
 
          //register
         .addCase(signUp.pending,(state)=>{
              return {
                ...state,
                loading:true,
                 err:null
              }
         })

         .addCase(signUp.fulfilled,(state,action)=>{
             return {
                data:action.payload,
                loading:false,
                err:null
             }
       })

       .addCase(signUp.rejected,(state,action)=>{
        return {
          ...state,
          loading:true,
           err:action.error
        }
   })


    }
})

export default user.reducer