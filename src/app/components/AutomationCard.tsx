import { Zap, ArrowRight, Play, Pause } from 'lucide-react';

interface AutomationCardProps {
  title: string;
  trigger: string;
  action: string;
  status: 'active' | 'paused';
  executions: number;
}

export function AutomationCard({ title, trigger, action, status, executions }: AutomationCardProps) {
  const isActive = status === 'active';

  return (
    <div
      className="group relative rounded-xl p-5 border border-border transition-all duration-300 hover:border-primary/30"
      style={{
        background: 'var(--card)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg"
             style={{
               background: isActive ? 'rgba(34, 211, 238, 0.2)' : 'rgba(155, 163, 180, 0.2)'
             }}>
          <Zap className="w-4 h-4" style={{ color: isActive ? '#22d3ee' : '#9ba3b4' }} strokeWidth={2} />
        </div>
        <div className="flex items-center gap-2">
          <div className={`px-2 py-1 rounded-md text-xs flex items-center gap-1.5 ${isActive ? 'bg-green-500/10' : 'bg-gray-500/10'}`}
               style={{ fontWeight: 600 }}>
            {isActive ? (
              <>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400">Active</span>
              </>
            ) : (
              <>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span className="text-gray-400">Paused</span>
              </>
            )}
          </div>
          <button className="p-1.5 rounded-lg hover:bg-secondary/50 transition-colors">
            {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <h4 className="text-sm mb-3" style={{ fontWeight: 600 }}>{title}</h4>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 px-3 py-2 rounded-lg text-xs"
             style={{ background: 'var(--secondary)', fontWeight: 500 }}>
          {trigger}
        </div>
        <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2} />
        <div className="flex-1 px-3 py-2 rounded-lg text-xs"
             style={{ background: 'var(--secondary)', fontWeight: 500 }}>
          {action}
        </div>
      </div>

      <div className="text-xs text-muted-foreground">
        <span style={{ fontWeight: 600 }}>{executions.toLocaleString()}</span> executions this month
      </div>
    </div>
  );
}
