import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import AddCoffee from '../pages/AddCoffee/AddCoffee';
import CoffeDetails from '../pages/CoffeDetails/CoffeDetails';
import CoffeeInfoUpdate from '../pages/CoffeeInfoUpdate/CoffeeInfoUpdate';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

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
        path: '/coffee-details',
        element: <CoffeDetails />,
      },
      {
        path: '/coffee-info-update',
        element: <CoffeeInfoUpdate />,
      },
      {
        path: '/about',
        element: <About />,
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
