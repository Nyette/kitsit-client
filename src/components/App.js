import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import firebase from "firebase";
import Header from "./Header";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

const firebaseConfig = {
  apiKey: "AIzaSyDzQlUHI885B5mxf9-qPef-S4auHIzdBbs",
  authDomain: "kitsit-ab31e.firebaseapp.com",
  projectId: "kitsit-ab31e",
  storageBucket: "kitsit-ab31e.appspot.com",
  messagingSenderId: "486752479771",
  appId: "1:486752479771:web:a694e346d1a193e73126be",
  measurementId: "G-ZKMMFLRRKF",
};

firebase.initializeApp(firebaseConfig);

firebase.analytics();

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign in.
    signInSuccessWithAuthResult: () => false,
  },
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Make sure we unregister Firebase observers when the component unmounts.
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <Router>
      <div className="app">
        {isSignedIn ? <Header /> : null}
        <Switch>
          <Route path="/dashboard">
            {isSignedIn ? (
              <Dashboard firebaseAuth={firebase.auth()} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/">
            <SignIn
              isSignedIn={isSignedIn}
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
