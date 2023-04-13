import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import ChannelPage from "./pages/ChannelPage"
import CreateChannelPage from "./pages/CreateChannelPage"
import BroacdcastHistroyPage from "./pages/BroadcastHistoryPage"


function App() {


  return (
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/content/:username" element={<LandingPage />} />
        <Route path="/chatroom/:username/:id" element={ <ChannelPage/>} />
        <Route path="/channel/:username" element={<CreateChannelPage />} />
        <Route path="/broadcast/:username" element={<BroacdcastHistroyPage />} />
      </Routes>
   
   
  )
}

export default App
