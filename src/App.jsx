import React from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import { Outlet } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext';
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <CoinContextProvider>
      <div className='app'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Coin/:coinId' element={<Coin />} />
        </Routes>


        <Footer />

      </div>



    </CoinContextProvider>
  )
}



export default App;
