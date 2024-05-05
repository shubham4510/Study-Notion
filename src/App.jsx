import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import './App.css'
import Navbar from "./components/common/Navbar.jsx"

const App = () => {
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App