import { Footer } from "../components/Footer/Footer"
// import { Navigation } from "../components/Navigation/Navigation"
import { MobileNavigation } from "../components/Navigation/MobileNavigation"
import { NavBar } from "../components/Navigation/NavBar"
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    

    return(
        < >
            {/* <Navigation /> */}
            <MobileNavigation />
            <NavBar />
            <Outlet />
            <Footer /> 
        </>
    )
}