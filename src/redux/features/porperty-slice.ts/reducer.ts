import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers:{
       builder

       .
    }
})