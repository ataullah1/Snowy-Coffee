import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import AddCoffee from '../pages/AddCoffee/AddCoffee';
import CoffeDetails from '../pages/CoffeDetails/CoffeDetails';
import CoffeeInfoUpdate from '../pages/CoffeeInfoUpdate/CoffeeInfoUpdate';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Users from '../pages/Users/Users';
import PrivetRoute from '../PrivetRoute/PrivetRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () =>
          fetch('https://coffee-store-serve-side.vercel.app/coffees'),
      },
      {
        path: '/add-coffee',
        element: <AddCoffee />,
      },
      {
        path: '/coffee-details/:id',
        element: <CoffeDetails />,
        loader: () =>
          fetch('https://coffee-store-serve-side.vercel.app/coffees'),
      },
      {
        path: '/coffee-info-update/:id',
        element: <CoffeeInfoUpdate />,
        loader: () =>
          fetch('https://coffee-store-serve-side.vercel.app/coffees'),
      },
      {
        path: '/users',
        element: (
          <PrivetRoute>
            <Users />
          </PrivetRoute>
        ),
        loader: () => fetch('https://coffee-store-serve-side.vercel.app/users'),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
export default router;
