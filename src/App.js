import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/mainPage/Main";
import ProductDetail from "./pages/productDetail/ProductDetail";
import HeaderLayout from "./pages/HeaderLayout";
import ProductOrder from "./pages/Order/ProductOrder";
import ShoppingBasket from "./pages/Basket/ShoppingBasket";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderLayout />,
        children: [
            { index: true, element: <Main /> },
            { path: "basket", element: <ShoppingBasket /> },
            { path: "order", element: <ProductOrder /> },
            { path: "detail", element: <ProductDetail /> },
            { path: "order", element: <ProductOrder /> },

        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
