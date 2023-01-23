import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home/Home.component';
import Contact from './routes/contact/Contact.component';
import Nav from './routes/navigation/Nav.component';
import Error from './routes/error/Error.component';
import Authentication from './routes/authentication/Authentication.component';
import Shop from './routes/shop/Shop.component';
import Checkout from './routes/checkout/Checkout.component';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'auth',
          element: <Authentication />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
