import React, { useState } from "react";

function Dashboard(props) {
  const [displayName, setDisplayName] = useState(
    props.firebaseAuth.currentUser.displayName
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(displayName);
    // Validate
    // Send To DB
  }

  return (
    <main className="container text-center">
      <a className="btn btn-outline-primary btn-lg" href="/play">
        Play
      </a>

      <button
        className="btn btn-outline-primary btn-lg"
        onClick={() => props.firebaseAuth.signOut()}
      >
        Sign Out
      </button>

      <h2>Settings</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            className="form-control"
            id="displayName"
            placeholder={props.firebaseAuth.currentUser.displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-outline-primary btn-lg" type="submit">
          Submit
        </button>
      </form>

      <p>
        <em>You cannot reverse the following action!</em>
      </p>

      <button className="btn btn-outline-danger btn-lg">Delete Account</button>
    </main>
  );
}

export default Dashboard;
