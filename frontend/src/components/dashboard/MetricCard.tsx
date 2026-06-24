type MetricCardProps = {
  title: string
  value: string
  change?: string
  icon: any
}

function MetricCard({
  title,
  value,
  change,
  icon,
}: MetricCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <p className="text-zinc-400 text-sm">
          {title}
        </p>

        <div className="text-zinc-300">
          {icon}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-4">
        {value}
      </h2>

      {change && (
        <p className="text-green-400 mt-3 text-sm font-medium">
          {change}
        </p>
      )}
    </div>
  )
}

export default MetricCard