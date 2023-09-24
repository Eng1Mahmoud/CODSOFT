import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NaveBar from "./NaveBar"
const Root = () => {
    return (
       <div className="root">
            <NaveBar/>
              <Outlet/>
            <Footer/>
       </div>
    )
}

export default Root