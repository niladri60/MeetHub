import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomID" element={<Room />} />
    </Routes>
  );
}

export default App;
