function AccountCard(props: any) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          {props.name}
        </h2>

        <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-zinc-300">
          {props.broker}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-zinc-400">
          Strategy:
          <span className="text-white ml-2">
            {props.strategy}
          </span>
        </p>

        <p className="text-zinc-400">
          Max Drawdown:
          <span className="text-red-400 ml-2">
            {props.drawdown}
          </span>
        </p>

        <p className="text-zinc-400">
          Balance:
          <span className="text-green-400 ml-2">
            {props.balance}
          </span>
        </p>
      </div>
    </div>
  )
}

export default AccountCard