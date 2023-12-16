import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../pages/Home/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <p>this is error page</p>,
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
    ],
  },
]);
export default router;
