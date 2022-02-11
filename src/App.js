import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
