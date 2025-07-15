import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import './scss/styles.css'
import ProductPage from "./pages/ProductPage";

// Products array shared for all pages
const products = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: "Produkti numer ni",
  price: 40,
  category: 1,
  image:
    "https://gogaj.com/assets/images/Product61880011-Large-b953bceb-ae4c-4b5f-8bba-61e4290f82f7.png",
}));

function App() {
  return (

  <Router>
    <Routes>
      <Route path="/gogaj" element={<Home/>}></Route>
      <Route path="/products" element={<ProductsPage/>}></Route>
      <Route path="/product/:id" element={<ProductPage products={products} /> }></Route>
    </Routes>
  </Router>



  )
}

export default App;
