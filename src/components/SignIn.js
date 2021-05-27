import sleepingCat from "../assets/white-lucky-brown8.png";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function SignIn(props) {
  function renderButtons() {
    if (props.isSignedIn) {
      return (
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={() => props.firebaseAuth.signOut()}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <StyledFirebaseAuth
          uiConfig={props.uiConfig}
          firebaseAuth={props.firebaseAuth}
        />
      );
    }
  }

  return (
    <main className="container text-center">
      <div className="row">
        <div className="col-md-6">
          <h1>KitSit</h1>
          <p>Babysit your own virtual kitty.</p>
          {renderButtons()}
        </div>
        <div className="col-md-6">
          <img
            className="hotpink-round-border"
            src={sleepingCat}
            alt="Sleeping Cat"
          />
        </div>
      </div>
    </main>
  );
}

export default SignIn;
