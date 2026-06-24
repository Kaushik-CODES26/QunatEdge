import { BrowserRouter, Routes, Route } from "react-router-dom"

import Sidebar from "./components/layout/Sidebar"
import Navbar from "./components/layout/Navbar"

import Dashboard from "./pages/Dashboard"
import Accounts from "./pages/Accounts"
import Trades from "./pages/Trades"
import Analytics from "./pages/Analytics"
import RiskEngine from "./pages/RiskEngine"

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-black">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="p-6 text-white">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/trades" element={<Trades />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/risk-engine" element={<RiskEngine />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App