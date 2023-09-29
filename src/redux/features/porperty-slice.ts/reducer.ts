import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { filterproperties, getAllproperties } from "./action";

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

          .addCase(getAllproperties.pending, (state) => {
            return {
              ...state,
              loading: true,
              err: null,
            };
          })
          .addCase(getAllproperties.fulfilled, (state, action: PayloadAction<IProperty[]>) => {
            return {
              ...state,
              loading: false,
              properties: action.payload,
              err: null,
            };
          })
          .addCase(getAllproperties.rejected, (state, action) => {
            return {
              ...state,
              loading: true,
              err: action.error,
            };
          })


          //filter
          .addCase(filterproperties.pending,(state)=>{
            return {
              ...state,
              loading: true,
              err:null
            }
          })

          .addCase(filterproperties.fulfilled,(state,action)=>{
            return {
              ...state,
              properties:action.payload,
              loading: false,
              err:null
            }
          })

          .addCase(filterproperties.rejected,(state,action)=>{
            return {
              ...state,
              loading: true,
              err:action.error
            }
          })
    }
})

export default properties.reducer