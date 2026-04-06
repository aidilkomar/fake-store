import NavBar from "../layout/NavBar.jsx";
import {Outlet} from "react-router-dom";

export default function ProductPage() {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    )
}