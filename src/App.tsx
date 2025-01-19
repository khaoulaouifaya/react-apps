import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./componants/SideBar";
import Counter from "./componants/Counter";
import About from "./componants/About";
import WiningGame from "./componants/WiningGame";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <main className="col-md-8 p-4"> 
            <Routes>
              <Route path="/" element={<Counter />} />
              <Route path="/about" element={<About />} />
              <Route path="/winning-the-memory-game" element={<WiningGame />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
