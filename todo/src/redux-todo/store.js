import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import { reducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  
  reducer: reducer,
  devTools: true,
  middleware: [ sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export default store;
