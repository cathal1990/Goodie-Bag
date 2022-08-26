import { configureStore } from "@reduxjs/toolkit";
import candiesReducer from './redux/candiesReducer'

export const store = configureStore({
  reducer: {
    candies: candiesReducer
  },
});

// import { createStore, combineReducers } from "redux";
// import candiesReducer from './redux/candiesReducer'



// const rootReducer = combineReducers({
//     candies: candiesReducer
// })

// function configureStore() {
//     return createStore(rootReducer)
// }

// const store = configureStore()

// export default store