import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Users from './Components/Users';
import AddUser from "./Components/AddUser";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from "./Components/ErrorPage";
import EditUser from "./Components/EditUser";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
