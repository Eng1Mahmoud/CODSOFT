import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import {Root} from "./pages/Root"
import { Contact } from "./pages/Contact";
import {Projects} from "./pages/Projects"
import {NotFound} from "./pages/NotFound"
export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
            {
                index: true,
                path:"/",
                element: <Home />,
                },
                {
                path:"/about",
                element: <About />,
                },
                {
                path:"/skills",
                element: <Skills />,
                },
                {
                  path:"/contact",
                  element:<Contact/>,
                },
                {
                  path:"/projects",
                  element:<Projects/>
                },
                {
                  path:"*",
                  element:<NotFound/>
                }
      ]
    },
  
  ]);