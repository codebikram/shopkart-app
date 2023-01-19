import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.component';
import Contact from './routes/Contact.component';
import Nav from './routes/navigation/Nav.component';
import Error from './routes/Error.component';
import SignIn from './routes/sign-in/SignIn.component';
import Shop from './routes/Shop.component';

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
          path: 'sign-in',
          element: <SignIn />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
