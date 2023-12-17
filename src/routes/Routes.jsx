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
        element: <p>this is about section</p>,
      },
      {
        path: 'blog',
        element: <p>this is blog page</p>,
      },
      {
        path: 'favorite',
        element: <Favorite></Favorite>,
        loader: loaderFav,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginLayout></LoginLayout>,
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
    children: [
      {
        path: '/recepie/:id',
        element: (
          <PrivateRoute>
            <ViewRecepie></ViewRecepie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
]);
export default router;
