

import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Update from "./pages/updateBoard/Update";

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  </div>
  );
}

export default App;
