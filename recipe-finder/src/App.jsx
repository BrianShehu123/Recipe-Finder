import { Route, Routes, BrowserRouter } from "react-router-dom"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
//import Contact from "./pages/Contact"

import Recipes from "./components/Recipes"

function App() {

  return (
    <BrowserRouter>

        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/recipes" element={<Recipes />}></Route>
        </Routes>
        <Footer />

      
    </BrowserRouter>
  )
  
}

export default App