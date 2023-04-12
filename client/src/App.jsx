import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import ChannelPage from "./pages/ChannelPage"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/content" element={<LandingPage />} />
        <Route path="/chatroom" element={ <ChannelPage/>} />
      </Routes>
   
    </div>
  )
}

export default App
