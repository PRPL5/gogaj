const products = Array.from({ length: 15 }, (_,i) => ({
  id: i+1,
  title: "Produkti numer ni",
  price: 40,
  category: 1,
  image:
    "https://gogaj.com/assets/images/Product61880011-Large-b953bceb-ae4c-4b5f-8bba-61e4290f82f7.png",
}));

import '../scss/styles.css'
import ProductCard from "../components/Product/ProductCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../scss/styles.css";
import { Link } from "react-router-dom";
function ProductsPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="ProductsPage">
        <div className="productCards">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="Link">
              {" "}
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                img={product.image}
              />
            </Link>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ProductsPage;
