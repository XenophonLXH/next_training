import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = ( {children} ) => {
    return ( 
        <div class="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout; {} 