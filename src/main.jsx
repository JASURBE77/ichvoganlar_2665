import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import QualityStandard from './pages/QualityStandard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement: <NotFound/>,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/Quailtystandart",
        element:<QualityStandard/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
