import { ForumPage } from '../Pages/Forum';
import { LoginPage } from '../Pages/Login';
import { ProfilePage } from '../Pages/Profile';

const routes = [
        {
            path: "/Forum",
            element: ForumPage ,
        },
        {
            path: "/profile",
            element: ProfilePage,
        },
        {
            path: "/Login",
            element: LoginPage,
        },
];

    export default routes;
