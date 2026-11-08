import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home/home.page";
import ProductPage from "../pages/product/product.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

export default router;
