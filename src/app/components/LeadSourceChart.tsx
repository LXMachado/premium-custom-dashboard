import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Website', value: 385, color: '#22d3ee' },
  { name: 'Referral', value: 245, color: '#06b6d4' },
  { name: 'Social Media', value: 189, color: '#0891b2' },
  { name: 'Direct', value: 142, color: '#0e7490' },
  { name: 'Other', value: 98, color: '#155e75' },
];

export function LeadSourceChart() {
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
        <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>Lead Sources</h3>
        <p className="text-sm text-muted-foreground">Distribution of lead acquisition channels</p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: 'rgba(20, 22, 30, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                backdropFilter: 'blur(20px)',
                color: '#f1f3f7',
                fontFamily: 'var(--font-body)',
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
