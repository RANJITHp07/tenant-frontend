import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface initialState{
    value:{
        open1:Boolean,
        open2:Boolean
    }
}


export const initialState:initialState={
    value:{
        open1:false, //to open the navbarPanel
        open2:false  // to open the filter from mid device
    }
}

export const openMenu=createSlice({
    name:"openMenu",
    initialState,
    reducers:{
        open:(state,action:<PayloadAction>){
              
        }
    }
})

export const {}=openMenu.actions
export default openMenu.reducer