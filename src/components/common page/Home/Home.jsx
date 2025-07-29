import './homecommon.css'
import Navbar from './Navbar'
import ViewCatagoryProducts from './ViewCatagoryProducts'
import Footer from './footer'
function Home() {
    return (
        <div className='landing-page'>
            <Navbar />
            <ViewCatagoryProducts />
            <Footer />
        </div>
    )
}

export default Home