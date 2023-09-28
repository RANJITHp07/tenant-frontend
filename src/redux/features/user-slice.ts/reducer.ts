import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { logIn, signUp } from "./action";

interface InitalState{
    data:string
    loading:boolean
    logged:boolean
    err:any
}

const initialState:InitalState={
    data:'',
    loading:false,
    logged:false,
    err:null
}

const user=createSlice({
    name:"user",
    initialState,
    reducers:{
        logout:()=>{
            localStorage.removeItem('userId')
        },
        isLogged:(state)=>{
           const user= localStorage.getItem('userId')
           if(user){
            return {
                ...state,
                loading:false,
                logged:true
            }
           }else{
            return {
                ...state,
                logged:false
            }
           }
        }
    },
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
                logged:false,
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

   //login
   .addCase(logIn.pending,(state)=>{
              return {
                ...state,
                loading:true,
                 err:null
              }
         })

         .addCase(logIn.fulfilled,(state,action)=>{
            localStorage.setItem('userId',action.payload.token)
             return {
                data:action.payload.data,
                logged:true,
                loading:false,
                err:null
             }
       })

       .addCase(logIn.rejected,(state,action)=>{
        return {
          ...state,
          loading:true,
           err:action.error
        }
   })



    }
})

export const  {isLogged,logout}= user.actions

export default user.reducer