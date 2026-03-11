import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Partfolio from './pages/Partfolio.jsx';
import PartfolioSingle from './pages/PartfolioSingle.jsx';
import BlogSingle from './pages/BlogSingle.jsx';
import Licenses from './pages/Licenses.jsx';
import QualityStandart from "./pages/QualityStandard.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/about",
        element: <About />
      },
       {
        path:"/partfolio",
        element: <Partfolio />
      },
       {
        path:"/partfolioSingle/:id",
        element: <PartfolioSingle />
      },
      {
        path: "/blogsingle",
        element: <BlogSingle />
      },
      {
        path: "/litzensatsiya",
        element: <Licenses />
      },
      {
        path: "/quality",
        element: <QualityStandart />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
