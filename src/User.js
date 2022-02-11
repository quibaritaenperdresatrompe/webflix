import { Link, useMatch, useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const match = useMatch("/users/2");
  console.log("match", match);

  return (
    <div>
      <h1>
        <span role="img" aria-label="people">
          👤
        </span>{" "}
        {params.id}
      </h1>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default User;
