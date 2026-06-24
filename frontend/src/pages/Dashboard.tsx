import { useState } from "react"

import MetricCard from "../components/dashboard/MetricCard"
import TradesTable from "../components/dashboard/TradesTable"
import TradeForm from "../components/dashboard/TradeForm"

import {
  DollarSign,
  TrendingUp,
  ShieldAlert,
  Wallet,
} from "lucide-react"

function Dashboard() {
  const [trades, setTrades] = useState<any[]>([
    {
      symbol: "XAUUSD",
      result: "TP",
      rr: "1:2",
      pnl: "+$420",
      status: "Win",
    },
    {
      symbol: "NAS100",
      result: "SL",
      rr: "1:1",
      pnl: "-$180",
      status: "Loss",
    },
  ])

  function addTrade(newTrade: any) {
    setTrades([newTrade, ...trades])
  }

  function deleteTrade(indexToDelete: number) {
    setTrades(
      trades.filter((_, index) => index !== indexToDelete)
    )
  }

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard 🚀
        </h1>

        <p className="text-zinc-400 mt-2">
          Funded trader execution analytics overview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        <MetricCard
          title="Daily PnL"
          value="$1,250"
          change="+12.5%"
          icon={<DollarSign size={22} />}
        />

        <MetricCard
          title="Win Rate"
          value="68%"
          change="+4.2%"
          icon={<TrendingUp size={22} />}
        />

        <MetricCard
          title="Drawdown Remaining"
          value="$3,420"
          icon={<ShieldAlert size={22} />}
        />

        <MetricCard
          title="Active Accounts"
          value="4"
          icon={<Wallet size={22} />}
        />
      </div>

      <TradeForm addTrade={addTrade} />

      <TradesTable
        trades={trades}
        deleteTrade={deleteTrade}
      />
    </div>
  )
}

export default Dashboard