import actions from "./actions";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { addTodo, deleteTodo, getTodo} from "./reducer";
// import { useDispatch } from "react-redux";


function* todoAction(action) {
 
  if (action.type === "GET_ALL_TODO") {
    const res = yield axios.get("http://localhost:9000/api/tasks/", action.payload);
    yield put(getTodo(res.data))
  } else if (action.type === "ADD_SAGA_TODO") {
    const res = yield axios.post("http://localhost:9000/api/tasks", action.payload);
    yield put(addTodo(res.data));
  } else if (action.type === "DELETE_SAGA_TODO") {
    const res = axios.delete(
      "http://localhost:9000/api/tasks/" + action.payload.id
    );
    console.log(res)
    yield put(deleteTodo(action.payload.id));
  } else if (action.type === "UPDATE_SAGA_TODO") {
    const { id, status, title, _id } = action.payload;
    const res = yield axios.put(
      `http://localhost:9000/api/tasks/${_id}`,
      {
        id,
        statusValue: status,
        value: title,
        dateValue: ""
      }
    );
    if (res.data.status === 'success') {
      const res = yield axios.get("http://localhost:9000/api/tasks/", action.payload);
      yield put(getTodo(res.data))
    }
  }
}

function* Saga() {
  yield takeEvery(
    [actions.addTodo, actions.deleteTodo, actions.updateTodo, actions.getTodo],
    todoAction
  );
}

export default Saga;
