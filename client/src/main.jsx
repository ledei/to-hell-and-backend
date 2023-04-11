import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import LoginPage from './pages/Login'
import './stylesheet/main.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <LoginPage />
  </React.StrictMode>
)
