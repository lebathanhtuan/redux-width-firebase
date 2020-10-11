import { put, takeEvery, call, all } from 'redux-saga/effects';
import axios from 'axios';
// import firebase from '../../configs/firebase';

import {
  GET_TASK_LIST,
  GET_TASK_LIST_SUCCESS,
  GET_TASK_LIST_FAIL,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAIL,
  EDIT_TASK,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAIL,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
} from '../constants';

const apiUrl = 'http://localhost:3001';

// function* getTaskListSaga(action){
//   try {
//     let response = [];
//     const snapshot = yield firebase.firestore.getCollection('tasks');
//     snapshot.forEach((doc) => {
//       response = [
//         ...response,
//         {
//           id: doc.id,
//           ...doc.data(),
//         },
//       ];
//     });
//     yield put({
//       type: GET_TASK_LIST_SUCCESS,
//       payload: response,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_TASK_LIST_FAIL,
//       payload: error,
//     });
//   }
// }

function* createTaskSaga(action){
  try {
    const response = yield axios.post(`${apiUrl}/todoList`, action.payload);
    const data = response.data;
    yield put({
      type: CREATE_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CREATE_TASK_FAIL,
      payload: error,
    });
  }
}

function* editTaskSaga(action){
  try {
    const { id, title, description } = action.payload;
    const response = yield axios.put(`${apiUrl}/todoList/${id}`, { title, description });
    const data = response.data;
    yield put({
      type: EDIT_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: EDIT_TASK_FAIL,
      payload: error,
    });
  }
}

function* deleteTaskSaga(action){
  try {
    const { id } = action.payload;
    yield axios.delete(`${apiUrl}/todoList/${id}`);
    yield put({
      type: DELETE_TASK_SUCCESS,
      payload: { id },
    });
  } catch (error) {
    yield put({
      type: DELETE_TASK_FAIL,
      payload: error,
    });
  }
}


export default function* todoListSaga(){
  yield all([
    // takeEvery(GET_TASK_LIST, getTaskListSaga),
    takeEvery(CREATE_TASK, createTaskSaga),
    takeEvery(EDIT_TASK, editTaskSaga),
    takeEvery(DELETE_TASK, deleteTaskSaga),
  ])
}
