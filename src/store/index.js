import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice(
  {
    name : "counter",
    initialState : {count : 0},
    reducers : {
      increament(state, action) {
        state.count ++;
      },
      decreament (state, action){
        state.count --;
      },
      addBy (state, action) {
        state.count += action.payload;
      }
    }
  
  }
)

export const actions = counterSlice.actions;
export const store = configureStore({
  reducer : counterSlice.reducer
})