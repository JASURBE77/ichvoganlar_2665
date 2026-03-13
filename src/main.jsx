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
import NotFound from './pages/NotFound.jsx';
import Team from './pages/Team.jsx';
import Xblog from './pages/Xblog.jsx'

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
        path:"/blog",
        element:<Xblog/>
      },
      {
        path: "/blogsingle/:id",
        element: <BlogSingle />
      },
      {
        path: "/litzensatsiya",
        element: <Licenses />
      },
      {
        path: "/quality",
        element: <QualityStandart />
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
