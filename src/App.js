import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.component';
import Contact from './routes/Contact.component';
import Nav from './components/navigation/Nav.component';
import Error from './routes/Error.component';

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
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
