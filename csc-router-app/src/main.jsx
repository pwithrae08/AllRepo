import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SignUpPage from "./pages/SignUpPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx"; // no need to manual import
import ProductPage from './pages/ProducePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProtectedRoute from './middlewares/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/product", // Fallback Route for product
    element: <ProductPage />, // Render same ProductPage
  },
  {
    path: "/product/:productId", // Dynamic route for individual products
    element: <ProductPage />,
  },

  {
    path: "/profile",
    element: <ProtectedRoute><ProfilePage/></ProtectedRoute>,
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);
