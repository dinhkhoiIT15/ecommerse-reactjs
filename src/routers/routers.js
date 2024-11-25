import { lazy } from "react"; //Xu ly bat dong bo

const routers = [
    {
        path: "/",
        component: lazy(() => import("@components/HomePage/HomePage"))
    }
];

export default routers;
