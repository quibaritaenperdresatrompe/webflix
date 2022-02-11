import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import routes from "./routes";
import User from "./User";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
