import Footer from "./Footer";
import Navbar from "./Navbar";
// create the structure of a page while the navbar & Footer are static
const Layout = ({children}) => {
    return ( 
    <div className="cont">
     <Navbar/> 
     {children}
     <Footer/>


    </div> 
     );
}
 
export default Layout;