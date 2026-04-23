import { GripVertical, MoreVertical, Clock, User } from 'lucide-react';
import { motion } from 'motion/react';

interface Task {
  id: string;
  title: string;
  client: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
  time: string;
}

const columns = [
  {
    title: 'New',
    count: 12,
    color: '#22d3ee',
    tasks: [
      { id: '1', title: 'Website Redesign Quote', client: 'Acme Corp', assignee: 'JS', priority: 'high' as const, time: '2h ago' },
      { id: '2', title: 'Server Migration Plan', client: 'TechStart Inc', assignee: 'AM', priority: 'medium' as const, time: '5h ago' },
    ]
  },
  {
    title: 'In Progress',
    count: 8,
    color: '#06b6d4',
    tasks: [
      { id: '3', title: 'Mobile App Development', client: 'FinanceHub', assignee: 'RK', priority: 'high' as const, time: '1d' },
      { id: '4', title: 'SEO Optimization', client: 'GreenLeaf Co', assignee: 'LP', priority: 'low' as const, time: '3d' },
    ]
  },
  {
    title: 'Waiting',
    count: 5,
    color: '#0891b2',
    tasks: [
      { id: '5', title: 'Client Approval Needed', client: 'BuildRight', assignee: 'SC', priority: 'medium' as const, time: '2d' },
    ]
  },
  {
    title: 'Completed',
    count: 34,
    color: '#0e7490',
    tasks: [
      { id: '6', title: 'Logo Design Delivery', client: 'Sunset Cafe', assignee: 'MH', priority: 'high' as const, time: '1h ago' },
      { id: '7', title: 'Database Backup', client: 'DataVault', assignee: 'TW', priority: 'medium' as const, time: '4h ago' },
    ]
  },
];

const priorityColors = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#6b7280',
};

export function WorkflowBoard() {
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
        <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>Workflow Pipeline</h3>
        <p className="text-sm text-muted-foreground">Active jobs and tasks across all stages</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg"
                 style={{ background: `${column.color}20` }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: column.color }} />
                <span className="text-sm" style={{ fontWeight: 600 }}>{column.title}</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${column.color}30`, color: column.color, fontWeight: 600 }}>
                {column.count}
              </span>
            </div>

            <div className="space-y-3">
              {column.tasks.map((task, taskIndex) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: colIndex * 0.1 + taskIndex * 0.05 }}
                  className="group p-4 rounded-lg border border-border transition-all duration-200 hover:border-primary/30 hover:shadow-lg cursor-grab active:cursor-grabbing"
                  style={{
                    background: 'var(--card)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-2 flex-1">
                      <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm mb-1" style={{ fontWeight: 600 }}>{task.title}</div>
                        <div className="text-xs text-muted-foreground">{task.client}</div>
                      </div>
                    </div>
                    <button className="p-1 rounded hover:bg-secondary/50 transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px]"
                           style={{
                             background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                             color: '#0a0b0f',
                             fontWeight: 700
                           }}>
                        {task.assignee}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {task.time}
                      </div>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: priorityColors[task.priority] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
