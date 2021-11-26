import Home from "../pages/home/home.component";
import Detail from "../pages/detail/detail.component";

export const Routes: any = [
    {
        name: 'Home',
        path: '/',
        component: <Home />,
        icon: "",
    },
    {
        name: 'Detail',
        path: `/news/:id`,
        component: <Detail />,
        icon: "",
    },
];
