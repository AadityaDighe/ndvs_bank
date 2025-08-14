import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Navbar from "../Navbar"
import ScrollToTop from "../ScrollToTop"

const Layout =()=>{
  return(
    <>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
    </>
  )
}


export default Layout