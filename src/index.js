import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Shoppingcart from './pages/Shoppingcart';
import Signin from './pages/Signin';
import Produck from './pages/Producks';
import { Provider } from 'react-redux'
import { store } from './RTK-Query/store'
import Createtitle from './part/Createtitle';


const router = createBrowserRouter(

  createRoutesFromElements(
    
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="shoppingcart" element={<Shoppingcart />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Producks/:id" element={<Produck />} />
      <Route path="Producks/:id" element={<Produck />} />
      <Route path="Createtitle" element={<Createtitle />} />
  
     
      {/* ... etc. */}
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);

