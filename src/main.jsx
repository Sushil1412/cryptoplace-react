import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom'
import Coin from './pages/Coin/Coin.jsx'
import Home from './pages/Home/Home';
import CoinContextProvider from './context/CoinContext.jsx'
import { HashRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,

//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/Coin', element: <Coin /> }



//     ]
//   }

// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>

    </HashRouter>



  </React.StrictMode>,
)
