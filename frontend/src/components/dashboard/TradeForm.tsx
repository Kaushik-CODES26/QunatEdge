import { useState } from "react"

function TradeForm(props: any) {
  const [symbol, setSymbol] = useState("")
  const [rr, setRr] = useState("")
  const [pnl, setPnl] = useState("")
  const [result, setResult] = useState("No Result")

  function handleSubmit() {
    if (!symbol || !rr || !pnl) return

    const newTrade = {
      symbol,
      result,
      rr,
      pnl,
      status:
        result === "TP"
          ? "Win"
          : result === "SL"
          ? "Loss"
          : result === "BE"
          ? "Break Even"
          : "No Result",
    }

    props.addTrade(newTrade)

    setSymbol("")
    setRr("")
    setPnl("")
    setResult("No Result")
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Add Trade
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          type="text"
          placeholder="RR Ratio"
          value={rr}
          onChange={(e) => setRr(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          type="text"
          placeholder="PnL"
          value={pnl}
          onChange={(e) => setPnl(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none"
        />

        <select
          value={result}
          onChange={(e) => setResult(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none"
        >
          <option value="TP">TP</option>
          <option value="SL">SL</option>
          <option value="BE">BE</option>
          <option value="No Result">No Result</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold"
      >
        Add Trade
      </button>
    </div>
  )
}

export default TradeForm