import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 58000 },
  { month: 'Jun', revenue: 67000 },
  { month: 'Jul', revenue: 72000 },
  { month: 'Aug', revenue: 69000 },
  { month: 'Sep', revenue: 78000 },
  { month: 'Oct', revenue: 84000 },
  { month: 'Nov', revenue: 91000 },
  { month: 'Dec', revenue: 95000 },
];

export function RevenueChart() {
  return (
    <div
      className="rounded-xl p-6 border border-border"
      style={{
        background: 'var(--card-elevated)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="mb-6">
        <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>Revenue Trend</h3>
        <p className="text-sm text-muted-foreground">Monthly revenue performance over the last year</p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="month"
              stroke="#9ba3b4"
              style={{ fontSize: '12px', fontFamily: 'var(--font-body)' }}
            />
            <YAxis
              stroke="#9ba3b4"
              style={{ fontSize: '12px', fontFamily: 'var(--font-body)' }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(20, 22, 30, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                backdropFilter: 'blur(20px)',
                color: '#f1f3f7',
                fontFamily: 'var(--font-body)',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#22d3ee"
              strokeWidth={2}
              fill="url(#revenueGradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
