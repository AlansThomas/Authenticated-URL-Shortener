import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import AuthGaurd from "./services/authGaurd";
const Dashboard = lazy(() => import("./components/dashBoard/Dashboard"))
const Page404 = lazy(() => import("./utils/page404"))
const Userlogin = lazy(() => import("./components/userLogin/login"))



export default function Router() {
    return (

        useRoutes([
            { path: '/', element: <Userlogin />, index: true },
            { path: '/home', element:<AuthGaurd> <Dashboard /> </AuthGaurd> , index: true },
            { path: '*', element: <Page404 replace />,index: true,},
        ])
    )
}