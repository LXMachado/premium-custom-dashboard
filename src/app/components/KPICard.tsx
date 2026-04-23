import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  data: number[];
  color: string;
}

export function KPICard({ title, value, change, icon: Icon, data, color }: KPICardProps) {
  const isPositive = change >= 0;
  const chartData = data.map((value, index) => ({ value, index }));

  return (
    <div
      className="relative rounded-xl p-6 border border-border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group cursor-pointer"
      style={{
        background: 'var(--card-elevated)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{
             background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${color}15, transparent 40%)`,
           }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-lg" style={{ background: `${color}20` }}>
            <Icon className="w-5 h-5" style={{ color }} strokeWidth={2} />
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${isPositive ? 'bg-green-500/10' : 'bg-red-500/10'}`}
               style={{ fontWeight: 600 }}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span className={isPositive ? 'text-green-400' : 'text-red-400'}>
              {isPositive ? '+' : ''}{change}%
            </span>
          </div>
        </div>

        <div className="text-3xl mb-1" style={{ fontWeight: 700, fontFamily: 'var(--font-display)' }}>
          {value}
        </div>
        <div className="text-sm text-muted-foreground mb-4">{title}</div>

        <div className="h-12 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                dot={false}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
