import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import './App.css'
import Navbar from "./components/common/Navbar.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"

const App = () => {
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App