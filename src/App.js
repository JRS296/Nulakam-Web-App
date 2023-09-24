import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import NotFound from './screens/NotFound';
import Products from './screens/Products Folder - Categories/Products';
import BusinessEconomics from './screens/Products Folder - Categories/BusinessEconomics';
import Classics from './screens/Products Folder - Categories/Classics';
import Education from './screens/Products Folder - Categories/Education';
import History from './screens/Products Folder - Categories/History';
import SciFIFantasy from './screens/Products Folder - Categories/SciFiFantasy';
import Account from './screens/Account';
import Cart from './screens/Cart';
import Loading from './screens/Loading';
import Search from './components/Search';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => { //Initial Load
    setTimeout(() => {
      setLoading(!loading)
    }, 1000)
  },[])

  return (
    <>
      {!loading ? (<Loading />) : (<>
        <Routes> {/*For handling routes*/}
          <Route path='/' element={<Home />} />

          <Route path='/products' element={<Products />} />
          <Route path='/products/business-and-economics' element={<BusinessEconomics />} />
          <Route path='/products/classics' element={<Classics />} />
          <Route path='/products/education' element={<Education />} />
          <Route path='/products/history' element={<History />} />
          <Route path='/products/sci-fi-and-fantasy' element={<SciFIFantasy />} />

          <Route path='/book/:slug' element={<Home />} />
          <Route path='/search' element={<Search />} />

          <Route path='/account' element={<Account />} />
          <Route path='/signup' element={<Account />} />
          {/* <Route path='/logout' element={} /> */}
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>)}
    </>
  );
}