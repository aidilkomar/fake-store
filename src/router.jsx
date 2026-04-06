import {createBrowserRouter} from "react-router-dom";
import UserPage from "./components/user/UserPage.jsx";
import ProductPage from "./components/product/ProductPage.jsx";
import ProductDetail from "./components/product/ProductDetail.jsx";
import UserCart from "./components/user/UserCart.jsx";
import UserGrid from "./components/user/UserGrid.jsx";
import ProductGrid from "./components/product/ProductGrid.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        Component:UserPage,
        children: [
            {
                index: true,
                Component: UserGrid
            },
            {
                path: "cart/:userId",
                Component: UserCart
            }
        ]
    },
    {
        path: "/users",
        Component:UserPage,
        children: [
            {
                index: true,
                Component: UserGrid
            },
            {
                path: "cart/:userId",
                Component: UserCart
            }
        ]
    },
    {
        path: "/products",
        Component: ProductPage,
        children: [
            {
                index: true,
                Component: ProductGrid
            },
            {
                path: "detail/:id",
                Component: ProductDetail
            }
        ]
    }
]);

export default router;