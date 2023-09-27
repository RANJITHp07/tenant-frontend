import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  open1: boolean;
  open2: boolean;
}


const initialState: initialState = {
  open1: false, // to open the navbarPanel
  open2: false, // to open the filter from mid device
};

export const openMenu = createSlice({
  name: "openMenu",
  initialState,
  reducers: {
    openM:(state, action: PayloadAction<{ key: keyof initialState; value: boolean }>)=>{
        const { key, value } = action.payload;
        if (key in state) {
          state[key] = value;
        }
      }
  },
});

export const { openM } = openMenu.actions;
export default openMenu.reducer;
