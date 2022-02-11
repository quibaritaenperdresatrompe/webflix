import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
