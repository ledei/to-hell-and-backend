import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/content" element={<LandingPage />} />
      </Routes>
   
    </div>
  )
}

export default App
