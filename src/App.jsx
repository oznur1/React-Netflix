import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Watchlist from './pages/WatchList';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch } from "react-redux";
import { getWatchList } from "./redux/action";
import { useEffect } from 'react';
const App = () => {
   // Dispatch kurulumu
   const dispatch = useDispatch();
   // Bileşen ekrana geldiğinde asekron thunk fonk. tetikle
   useEffect(() => {
     dispatch(getWatchList());
   }, []);
 return (  
<BrowserRouter>
<div className='p-5 md:p-10 lg:px-15 xl:px- flex flex-col min-h-screen'> 
<Header/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movie/:id' element={<Detail/>}/>
    <Route path='/watch-list' element={<Watchlist/>}/>
    </Routes>
    <Footer/>
    </div>
</BrowserRouter>
  )
}

export default App
