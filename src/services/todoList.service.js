// import WrapFirebase from './wrapFirebase';
// import { call } from 'redux-saga/effects';
// import _ from 'lodash';

// export default class TodoListService {
//   constructor() {
//     this.wrapFirebase = WrapFirebase;
//   }

//   *getTaskList() {
//     const snapshot = yield call(this.wrapFirebase.firestore.getCollection, 'tasks');
//     let result;
//     snapshot.forEach((obj) => {
//       result = {
//         ...result,
//         [obj.id]: obj.data(),
//       };
//       console.log('Log: TodoListService -> *getTaskList -> result', result);
//     });
//     return _.map(result, (val, id) => {
//       return { ...val, id };
//     });
//   }
// }
