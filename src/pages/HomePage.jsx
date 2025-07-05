import '../scss/styles.css'
import Sidebar from '../components/home/Sidebar';
import CarouselComponent from '../components/home/Carousel';
import NavBar from '../components/NavBar';
function Home(){
return(
    <div className="HomePage">
    <NavBar/>

        <div className='home-top'>
        <Sidebar></Sidebar>
        <CarouselComponent/>

        </div>
    </div>
)

}
export default Home;