import { createSlice } from "@reduxjs/toolkit"

export const dadoSlice = createSlice({
    name: 'dado',
    initialState: {
      valor: 0,
      slide: false,
      VisibilityItem: false
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
      ,
      visibilityOn : (state) =>  {
        state.VisibilityItem = true
      },

      visibilityOff : (state) =>  {
        state.VisibilityItem = false
      }
    }
})


export const {resetarDado, add, remove, open, visibilityOn , 
  visibilityOff } = dadoSlice.actions;
export default dadoSlice.reducer