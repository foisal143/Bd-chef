import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../pages/Home/Home/Home';
import LoginLayout from '../layouts/LoginLayout/LoginLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Recepies from '../layouts/Recepies/Recepies';
import ViewRecepie from '../pages/ViewRecepie/ViewRecepie';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Favorite from '../pages/Favorite/Favorite';
import loaderFav from '../utilitis/loderData';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'favorite',
        element: <Favorite></Favorite>,
        loader: loaderFav,
      },
      {
        path: 'profile',
        element: <ProfilePage></ProfilePage>,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: 'recepie',
    element: <Recepies></Recepies>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/recepie/:id',
        element: (
          <PrivateRoute>
            <ViewRecepie></ViewRecepie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bd-chef-server-ashy.vercel.app/chefs/${params.id}`),
      },
    ],
  },
]);
export default router;
