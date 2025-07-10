import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import {useNavigate} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import './scss/styles.css'



function App() {
  return (

  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<ProductPage/>}></Route>

    </Routes>
  </Router>



  )
}

export default App;
