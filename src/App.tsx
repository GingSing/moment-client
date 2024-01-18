import { Login, Home, Gallery, Upload } from "./pages";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="App" className="w-full h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
