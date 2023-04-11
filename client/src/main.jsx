import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import LoginPage from './pages/LoginPage'
import ChannelPage from './pages/ChannelPage';
import './stylesheet/main.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ChannelPage />
  </React.StrictMode>
)
