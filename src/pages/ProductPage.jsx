import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
function ProductPage({ products }) {
    const { id } = useParams();
    const product = products?.find(p => String(p.id) === id);

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className='ProductDetail'>
        <NavBar></NavBar>
           <section className='Product'>
            <img src={product.image}  />
            <h2>{product.title}</h2>
            <p>{product.price}€</p>


            </section>
        <Footer></Footer>
 
        </div>
        
    );
}

export default ProductPage;