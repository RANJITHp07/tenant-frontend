import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { getAllproperties } from "./actionType";

interface IProperty {
    userId?: string;
    property_name: string;
    property_address: string;
    property_type: "Apartment" | "Vacation homes" | "Single-family" | "Condominiums" | "Student Housing";
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    price: number;
    description: string;
    images: string[];
}

interface InitalState{
    loading:boolean,
    err:any,
    properties:IProperty[]
}

const initialState:InitalState={
    loading:true,
    err:null,
    properties:[]
}


const properties=createSlice({
    name:"properties",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
          builder 

          .addCase(getAllproperties.pending,(state)=>{
            state.loading=true,
            state.err=null
          })

          .addCase(getAllproperties.fulfilled,(state,action: PayloadAction<IProperty[]>)=>{
             state.loading=false,
             state.properties=action.payload,
             state.err=null
          })

          .addCase(getAllproperties.rejected,(state,action)=>{
            state.loading=true,
            state.err=action.error
          })

    }
})

export default properties.reducer