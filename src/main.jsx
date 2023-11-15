import React from 'react'
import ReactDOM from 'react-dom/client'
import Contact from './pages/Contact/Contact.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontPage from './pages/FrontPage/FrontPage.jsx';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/termos-e-condicoes-danki-code-ai",
    element: <TermsAndConditions />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
