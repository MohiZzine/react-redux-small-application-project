import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // Unlike the counterReducer function, we can in the Redux Toolkit function manipulate the existing state object and don't have to return a new object.
      // Such a thing is generally deprecated in Redux, because it can lead to bugs.
      // Bugs such as the one we had in the counterReducer function, where we forgot to return the showCounter property.
      // This is in fact because we are mutating the state object, which is not allowed in Redux.
      // Toolkit transforms our code into immutable code using a library called Immer which internally does the job for us

      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
