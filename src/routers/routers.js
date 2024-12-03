import { lazy } from "react"; //Xu ly bat dong bo

const routers = [
    {
        path: "/",
        component: lazy(() => import("@components/HomePage/HomePage"))
    },
    {
        path: "/shop",
        component: lazy(() => import("@pages/OurShop/OurShop"))
    }
];

export default routers;
