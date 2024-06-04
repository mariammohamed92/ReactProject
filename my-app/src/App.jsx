import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './Compontent/Layout/Layout';
import About from './Compontent/About/About.jsx';
import Parent from './Compontent/Parent/Parent.jsx';
import Home from './Compontent/Home/Home.jsx';
import NotFound from './Compontent/NotFound/NotFound.jsx';
import Blog from './Compontent/Blog/Blog.jsx';
import Porfile from './Compontent/Profile/Porfile.jsx';
import Serv from './Compontent/Serv/Serv.jsx';

let routers=createBrowserRouter([
{path:"" ,element:<Layout/> , children:[
  {index:true ,element:<Home/>},
{path:"about" , element:<About/>},
{path:"parent" , element:<Parent/>},
{path:"blog" , element:<Blog/>,children:[
  {path:"porfile" , element:<Porfile/>},
  {path:"serv" , element:<Serv/>},

]},
{path:"*" , element:<NotFound/>}
]}

])
export default function App() {
  return <>
  <RouterProvider router={routers}>
  </RouterProvider>
  
  </>
}

// npx create-react-app my-app
//cd my-app
//npm start
//New Terminal
//cd my-app
//npm i bootstrap @fortawesome/fontawesome-free  react-router-dom
//Component
//Navbar & Footer &Layout(Navbar&Outlet&Footer(import))
//App.jsx (Router)
//Navbar(a=Link&NavLink(import)&href=to &to=path(App.jsx))
