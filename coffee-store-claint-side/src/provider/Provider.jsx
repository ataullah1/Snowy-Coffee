import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import Swal from 'sweetalert2';

const providerGoogle = new GoogleAuthProvider();
export const ContextAuth = createContext();
const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userDta, setUserDta] = useState(null);

  // Email Password SignUp
  const emlPassRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  // Email Password Login
  const emlPassLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    // setIsLoading(true);
  };

  // Social Login
  const googleLogin = () => {
    signInWithPopup(auth, providerGoogle);
  };

  // profileUpdate
  const profileUpdate = (nam, pic) => {
    updateProfile(auth.currentUser, {
      displayName: nam,
      photoURL: pic,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserDta(currentUser);
      setIsLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // Log Out Account
  const logOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: 'Good Job',
          text: 'Your account has been Successfully Log Out.',
          icon: 'success',
          // showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be Log Out !',
          icon: 'error',
          // showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const authDta = {
    googleLogin,
    userDta,
    isLoading,
    setIsLoading,
    emlPassLogin,
    emlPassRegister,
    logOut,
    profileUpdate,
  };
  return (
    <ContextAuth.Provider value={authDta}>{children}</ContextAuth.Provider>
  );
};

export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
};
