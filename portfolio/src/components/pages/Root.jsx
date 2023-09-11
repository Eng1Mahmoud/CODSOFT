import {Aside} from "../Aside"
import {AsideMobile} from "../AsideMobile"
import {Outlet} from "react-router-dom"
export const Root = () => {
    return (
        <div className="layout">
            <Aside/>
            <AsideMobile/>
            <Outlet/>
        </div>
    )
}
    

       