import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import ChannelPage from "./pages/ChannelPage"


function App() {


  return (
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/content/:username" element={<LandingPage />} />
        <Route path="/chatroom/:username/:id" element={ <ChannelPage/>} />
      </Routes>
   
   
  )
}

export default App
