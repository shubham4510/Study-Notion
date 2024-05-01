import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home.jsx"

const App = () => {
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App