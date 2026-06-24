import AccountCard from "../components/dashboard/AccountCard"

function Accounts() {
  const accounts = [
    {
      name: "MNQ-2H",
      broker: "Tradovate",
      strategy: "London Scalping",
      drawdown: "$8,000",
      balance: "$100,000",
    },
    {
      name: "DOW JONES",
      broker: "Tradovate",
      strategy: "Swing Trading",
      drawdown: "$4,000",
      balance: "$50,000",
    },
    {
      name: "MNQ-1M",
      broker: "Tradovate",
      strategy: "News Trading",
      drawdown: "$2,000",
      balance: "$25,000",
    },
  ]

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-white">
          Accounts
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage funded accounts and strategies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {accounts.map((account, index) => (
          <AccountCard
            key={index}
            name={account.name}
            broker={account.broker}
            strategy={account.strategy}
            drawdown={account.drawdown}
            balance={account.balance}
          />
        ))}
      </div>
    </div>
  )
}

export default Accounts