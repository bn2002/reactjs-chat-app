import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<ChatRoom />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
