import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderLayout from "./pages/HeaderLayout";
import Main from "./pages/mainPage/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <Main /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
