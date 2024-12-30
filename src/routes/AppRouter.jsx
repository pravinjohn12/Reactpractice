import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Dashboard from "../pages/Dashboard"
import TermsPolicy from "../pages/TermsPolicy"


function AppRouter() {
  return (
  
   <Routes>
    <Route path="*" element={<h1>Not found</h1>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/terms" element={<TermsPolicy/>}/>
   </Routes>

  )
}

export default AppRouter