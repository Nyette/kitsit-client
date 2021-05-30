import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="btn btn-outline-primary btn-lg"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LogIn;
