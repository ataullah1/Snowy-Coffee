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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:3000/coffees'),
      },
      {
        path: '/add-coffee',
        element: <AddCoffee />,
      },
      {
        path: '/coffee-details/:id',
        element: <CoffeDetails />,
        loader: () => fetch('http://localhost:3000/coffees'),
      },
      {
        path: '/coffee-info-update/:id',
        element: <CoffeeInfoUpdate />,
        loader: () => fetch('http://localhost:3000/coffees'),
      },
      {
        path: '/users',
        element: <Users />,
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
