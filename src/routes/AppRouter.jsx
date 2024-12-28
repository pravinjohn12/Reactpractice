import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Dashboard from "../pages/Dashboard"


function AppRouter() {
  return (
  
   <Routes>
    <Route path="*" element={<h1>Not found</h1>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>

  )
}

export default AppRouter