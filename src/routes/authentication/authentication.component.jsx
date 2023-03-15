import "./authentication.style.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

/*
import "./authentication.style.scss";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   // auth,
//   signInWithGooglePopUp,
//   // signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  // useEffect(() => {
  //   async function fetchSignInData() {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //     console.log(response);
  //   }
  //   fetchSignInData();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopUp();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  // const logGoogleRediectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  //   // const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      { <button onClick={logGoogleUser}>Sign In with Google PopUp</button> }
      { <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> }
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;





*/
