import runningCat from "../assets/running.gif";

const Loading = () => {
  return (
    <main className="container text-center">
      <h1>Loading...</h1>
      <img
        className="hotpink-round-border"
        src={runningCat}
        alt="Running Cat"
      />
    </main>
  );
};

export default Loading;
