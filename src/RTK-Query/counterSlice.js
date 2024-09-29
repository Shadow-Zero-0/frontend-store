import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrcart: [],
  arreycartid: [],

}


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Addproduck: (state, action) => {
      state.arrcart.push(action.payload);
      state.arreycartid.push(action.payload.id);

    },

    addplus: (state, action) => {
      const add = state.arrcart.find((item) => {
        return item.id === action.payload.id;
      });
      add.quantity += 1;

     
    },
    removeplus: (state, action) => {
      const add = state.arrcart.find((item) => {
        return item.id === action.payload.id;
      });
      add.quantity -= 1;
    },
    removeproduck: (state, action) => {
      const filter = state.arrcart.filter((item) => {
        return item.id !== action.payload.id;
      }); const filterid = state.arreycartid.filter((item) => {
        return item !== action.payload.id;
      });
      state.arrcart = filter;
      state.arreycartid = filterid;
    },
  

  },
});

export const { Addproduck, addplus, removeplus, removeproduck } =
  counterSlice.actions;

export default counterSlice.reducer;
