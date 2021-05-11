function Dashboard() {
  return (
    <main className="container text-center">
      <p>Hi!</p>
      <a className="btn btn-outline-primary btn-lg" href="/play" role="button">
        Play
      </a>
      <a
        className="btn btn-outline-primary btn-lg"
        href="/logout"
        role="button"
      >
        Log Out
      </a>
    </main>
  );
}

export default Dashboard;
