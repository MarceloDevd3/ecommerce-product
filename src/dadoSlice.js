import { createSlice } from "@reduxjs/toolkit"

export const dadoSlice = createSlice({
    name: 'dado',
    initialState: {
      valor: 0,
      slide: false
    },
    reducers: {
      resetarDado : (state) => {
        state.valor = 0;
      },
      add : (state) => {
        state.valor += 1;
      },
      remove : (state) => {
        state.valor -= 1;
      },
      open: (state) => {
        state.slide = !state.slide
      }
    }
})


export const {resetarDado, add, remove, open} = dadoSlice.actions;
export default dadoSlice.reducer