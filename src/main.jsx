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
import Team from './pages/Team.jsx';

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
        path:"/teem",
        element:<Team/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
