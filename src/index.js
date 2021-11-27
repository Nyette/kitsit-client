import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6txrfg48.us.auth0.com"
      clientId="P8dAB1IgaSHSZoYeSRYcv2Akj1VYSD6Y"
      redirectUri={window.location.origin}
      audience="https://dev-6txrfg48.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
