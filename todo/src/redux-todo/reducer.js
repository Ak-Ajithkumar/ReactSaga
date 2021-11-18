import { createSlice } from "@reduxjs/toolkit";
// import actions from "./actions";

const initialState = {
  todos: [],
};

const TodoReducer = createSlice({
  
  name: "todoapp",

  initialState,
  reducers: {
   

    getTodo: (state, action) => {
      console.log('GETtODO')
      state.todos = action.payload
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos =
        action.payload === "all"
          ? []
          : state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodos: (state, action) => {
      // console.log(action)
    }

  }
})
// console.log("reducer")
export const { getTodo, addTodo, deleteTodo, updateTodo } = TodoReducer.actions;
export const reducer = TodoReducer.reducer;
