import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook,useSelector} from "react-redux"

import openMenu from "./features/open-slice";

export const store=configureStore({
    reducer:{
        openMenu
    }
})
