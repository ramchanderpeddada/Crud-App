import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'
import Users from './Components/Users'
import Nav from './Components/Nav'

const App = () => {
    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='/users' element={<Users />}></Route>
                <Route path='/add' element={<AddUser />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
                <Route path='/edit/:id' element={<EditUser />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
