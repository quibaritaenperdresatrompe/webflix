import Genre from "./Genre";

function Home() {
  return (
    <div>
      <h1>
        Webflix{" "}
        <span role="img" aria-label="popcorn">
          🍿
        </span>
      </h1>
      <Genre id="53" />
    </div>
  );
}

export default Home;
