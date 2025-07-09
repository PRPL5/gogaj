import '../../scss/styles.css'
function ProductCard({title,img,price}){
    return(
        <div className="ProductCard">
            <img src={img} className='image' alt="" />
            <section>    <h3 className='title'>{title}</h3>
            <p className='price'>{price}€</p></section>
         <button className="cart-btn" title="Add to cart">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-9-2V4a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v2h4V1a1 1 0 1 1 2 0v2h1a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h8V5H6v10z"/>
                    </svg>
                </button>
        </div>
    )
}

export default ProductCard;

//https://img.livingstyles.com.au/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/U/P/UP0028-30_1.jpg?width=500&quality=100