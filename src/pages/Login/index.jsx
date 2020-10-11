import React, { useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';

import history from '../../util/history';

import {
  firebaseApp,
  firebaseAppAuth,
  firebaseProviders,
} from '../../services/firebase';
import { Redirect } from 'react-router';

function Login({
  user,
  signOut,
  signInWithGoogle,
}) {
  useEffect(() => {
    if (user) {
      const {
        uid,
        displayName: name,
        email,
        phoneNumber,
        refreshToken,
        photoURL: avatar,
      } = user;

      firebaseApp.database().ref(`users/${uid}`).on('value', (snapshot) => {
        if (!snapshot.val()) {
          if (window.confirm("Tài khoảng mới")) {
            firebaseApp.database().ref(`users/${uid}`).set({
              name,
            });
          } else {
            signOut();
          }
        } else {
          localStorage.setItem('authData', JSON.stringify({
            uid,
            name,
            email,
            phoneNumber,
            avatar,
            refreshToken,
          }));
          history.push('/');
        }
      });
    };
  }, [user]);

  if (localStorage.getItem('authData')) {
    return <Redirect to='/' />
  }
  return (
    <div>
      Login
      <button
        className="btn btn-primary"
        onClick={() => signInWithGoogle()}
      >
        Đăng nhập
      </button>
    </div>
  );
}

export default withFirebaseAuth({
  providers: firebaseProviders,
  firebaseAppAuth,
})(Login);
