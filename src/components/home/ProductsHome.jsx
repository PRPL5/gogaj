import ProductCard from "../Product/ProductCard";
import { Link } from "react-router-dom";
function ProductsHome() {
  const products = Array.from({ length: 8 }, (_,i) => ({
    id: i + 1,
    title: "Produkti numer ni",
    price: 40,
    category: 1,
    image:
      "https://gogaj.com/assets/images/Product61880011-Large-b953bceb-ae4c-4b5f-8bba-61e4290f82f7.png",
  }));
  return (
    <div className="ProductsHome">
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
  );
}

export default ProductsHome;
