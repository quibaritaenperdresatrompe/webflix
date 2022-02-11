import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const users = Array.from({ length: 40 }, (v, k) => ({
  id: k,
  name: `User #${k}`,
}));

function Users() {
  const [value, setValue] = useState("");
  const [params] = useSearchParams();
  const onChange = (event) => setValue(event.target.value);

  useEffect(() => {
    setValue(params.get("q") || "");
  }, [params]);

  return (
    <div>
      <input value={value} onChange={onChange} />
      <ul>
        {users
          .filter((user) => user.name.match(new RegExp(value)))
          .map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Users;
