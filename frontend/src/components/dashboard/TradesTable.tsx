function TradesTable(props: any) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-2xl font-semibold">
          Recent Trades
        </h2>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-zinc-500 border-b border-zinc-800">
            <th className="pb-4">Symbol</th>
            <th className="pb-4">Result</th>
            <th className="pb-4">RR</th>
            <th className="pb-4">PnL</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {props.trades.map((trade: any, index: number) => (
            <tr
              key={index}
              className="border-b border-zinc-800"
            >
              <td className="py-4 text-white">
                {trade.symbol}
              </td>

              <td className="py-4 text-zinc-300">
                {trade.result}
              </td>

              <td className="py-4 text-zinc-300">
                {trade.rr}
              </td>

              <td
                className={`py-4 font-medium ${
                  trade.pnl.includes("+")
                    ? "text-green-400"
                    : trade.pnl.includes("-")
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {trade.pnl}
              </td>

              <td
                className={`py-4 font-medium ${
                  trade.status === "Win"
  ? "text-green-400"
  : trade.status === "Loss"
  ? "text-red-400"
  : trade.status === "Break Even"
  ? "text-blue-400"
  : "text-yellow-400"
                }`}
              >
                {trade.status}
              </td>

              <td className="py-4">
                <button
                  onClick={() => props.deleteTrade(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TradesTable