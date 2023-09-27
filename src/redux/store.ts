import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook,useSelector} from "react-redux"
import openReducer from "./features/open-slice";

export const store=configureStore({
    reducer:{
        openReducer
    }
})


export type RootStore=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootStore> = useSelector