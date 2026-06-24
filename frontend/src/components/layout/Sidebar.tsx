import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold text-white">
        QuantEdge
      </h1>

      <div className="mt-10 space-y-4 text-gray-400 flex flex-col">
        <Link to="/">Dashboard</Link>
        <Link to="/accounts">Accounts</Link>
        <Link to="/trades">Trades</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/risk-engine">Risk Engine</Link>
      </div>
    </div>
  )
}

export default Sidebar