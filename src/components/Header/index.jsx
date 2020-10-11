import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';

import history from '../../util/history';

import { firebaseAppAuth, firebaseProviders } from '../../services/firebase';

import './styles.css';

function Header({
  signOut,
}) {
  const authData = JSON.parse(localStorage.getItem('authData'));
  console.log('Log: authData', authData);

  const handleSignOut = () => {
    signOut();
    localStorage.removeItem('authData');
    return history.push('login');
  }

  return (
    <div className="header">
      <div>Brand Name</div>
      <div className="header-menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">About us</div>
      </div>
      <div className="d-flex align-items-center">
        <div className="mr-2">{authData.name}</div>
        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => handleSignOut()}
        >
          Đăng xuất
        </button>
      </div>  
    </div>
  );
}

export default withFirebaseAuth({
  providers: firebaseProviders,
  firebaseAppAuth,
})(Header);

