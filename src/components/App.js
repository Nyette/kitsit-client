import firebase from "firebase/app";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import Dashboard from "./Dashboard";
import Home from "./Home";

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

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="app">{isAuthenticated ? <Dashboard /> : <Home />}</div>
    );
  }
};

export default App;
