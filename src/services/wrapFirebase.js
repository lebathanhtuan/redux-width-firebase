// import { firebaseApp } from './firebase';

// import { call } from 'redux-saga/effects';

// export const getCollectionRef = (rsf, pathOrRef) => {
//   return typeof pathOrRef === 'string' ? rsf.app.firestore().collection(pathOrRef) : pathOrRef;
// };

// export const getDocumentRef = (rsf, pathOrRef) => {
//   return typeof pathOrRef === 'string' ? rsf.app.firestore().doc(pathOrRef) : pathOrRef;
// };

// export function* getCollection(collectionRef) {
//   const collection = getCollectionRef(this, collectionRef);
//   return yield call([collection, collection.get]);
// }

// export function* getDocument(documentRef) {
//   const doc = getDocumentRef(this, documentRef);
//   return yield call([doc, doc.get]);
// }

// export function* addDocument(collectionRef, data) {
//   const collection = getCollectionRef(this, collectionRef);
//   return yield call([collection, collection.add], data);
// }

// export function* deleteDocument(documentRef) {
//   const doc = getDocumentRef(this, documentRef);
//   return yield call([doc, doc.delete]);
// }

// export function* setDocument(documentRef, data, options) {
//   const doc = getDocumentRef(this, documentRef);
//   return yield call([doc, doc.set], data, options);
// }

// export function* updateDocument(documentRef, ...args) {
//   const doc = getDocumentRef(this, documentRef);
//   return yield call([doc, doc.update], ...args);
// }

// class WrapFirebase {
//   constructor(firebaseApp) {
//     this.app = firebaseApp;
//     this.firestore = {
//       addDocument: addDocument.bind(this),
//       deleteDocument: deleteDocument.bind(this),
//       getCollection: getCollection.bind(this),
//       getDocument: getDocument.bind(this),
//       setDocument: setDocument.bind(this),
//       updateDocument: updateDocument.bind(this)
//     };
//   }
// }

// const wrapFirebase = new WrapFirebase(firebaseApp);

// export default wrapFirebase;
