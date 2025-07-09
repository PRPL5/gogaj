import ProductCard from "../Product/ProductCard";
function ProductsHome(){
    const products = Array.from({ length: 8 }, () => ({
    title: 'Produkti numer ni',
    price: 40,
    category: 1,    
    image: 'https://gogaj.com/assets/images/Product61880011-Large-b953bceb-ae4c-4b5f-8bba-61e4290f82f7.png'
  }));
    return(
        <div className="ProductsHome">
             <div className='productCards'>
                  {products.map(product => (
            <ProductCard
            title={product.title}
            price={product.price}
            // category={product.category}
            img={product.image}
            />
        ))} 
             </div>
  
        </div>
    )
}

export default ProductsHome