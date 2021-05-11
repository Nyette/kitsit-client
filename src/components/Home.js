import sleepingCat from "../assets/white-lucky-brown8.png";

function Home() {
  return (
    <main className="container text-center">
      <div className="row">
        <div className="col-md-6">
          <h1>KitSit</h1>
          <p>Babysit your own virtual kitty.</p>
          <a
            className="btn btn-outline-primary btn-lg"
            href="/login"
            role="button"
          >
            Log In
          </a>
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

export default Home;
