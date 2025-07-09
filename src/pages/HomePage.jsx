import '../scss/styles.css'
import Sidebar from '../components/home/Sidebar';
import CarouselComponent from '../components/home/Carousel';
import NavBar from '../components/NavBar';
import NavHome from '../components/home/NavHome';
import ProductsHome from '../components/home/ProductsHome';
import Footer from '../components/Footer';
function Home(){
return(
    <div className="HomePage">
    <NavBar/>

        <div className='home-top'>
        <Sidebar></Sidebar>
        <CarouselComponent/>

        </div>

        <div className='home-main'>
            <NavHome></NavHome>
             <ProductsHome/>
  
        </div>
        <Footer></Footer>
    </div>
)

}
export default Home;