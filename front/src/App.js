

import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Update from "./pages/updateBoard/Update";
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector((state) => state.auth)
  return (
  <div>
    <Routes>
      <Route path="/" element={ user ? <Home /> : <Navigate to="/login" /> } />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/create" element={user ? <Create /> : <Navigate to="/login" />} />
      <Route path="/update/:id" element={user ? <Update /> : <Navigate to="/login" />} />
      <Route path="/" />
    </Routes>
  </div>
  );
}

export default App;
