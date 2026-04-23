import {
  UserPlus,
  FileText,
  DollarSign,
  Zap,
  MessageSquare,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

interface Activity {
  id: string;
  type: 'lead' | 'job' | 'payment' | 'automation' | 'note' | 'completion';
  title: string;
  description: string;
  time: string;
  user?: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'lead',
    title: 'New lead captured',
    description: 'Sarah Martinez submitted contact form for Enterprise Plan',
    time: '2 minutes ago',
  },
  {
    id: '2',
    type: 'payment',
    title: 'Payment received',
    description: 'Invoice #INV-2847 paid by Acme Corp - $12,450',
    time: '18 minutes ago',
  },
  {
    id: '3',
    type: 'automation',
    title: 'Automation triggered',
    description: 'Sent follow-up email to 12 prospects',
    time: '45 minutes ago',
  },
  {
    id: '4',
    type: 'completion',
    title: 'Job completed',
    description: 'Mobile App Phase 2 marked complete by James K.',
    time: '1 hour ago',
    user: 'JK'
  },
  {
    id: '5',
    type: 'job',
    title: 'Job status updated',
    description: 'Website Redesign moved to In Progress',
    time: '2 hours ago',
    user: 'AM'
  },
  {
    id: '6',
    type: 'note',
    title: 'Team note added',
    description: 'Client meeting notes added to Project Atlas',
    time: '3 hours ago',
    user: 'SC'
  },
  {
    id: '7',
    type: 'lead',
    title: 'New lead captured',
    description: 'David Park requested consultation call',
    time: '4 hours ago',
  },
  {
    id: '8',
    type: 'payment',
    title: 'Payment received',
    description: 'Subscription renewal - BuildRight LLC - $2,999',
    time: '5 hours ago',
  },
];

const iconMap = {
  lead: UserPlus,
  job: FileText,
  payment: DollarSign,
  automation: Zap,
  note: MessageSquare,
  completion: CheckCircle2,
};

const colorMap = {
  lead: '#22d3ee',
  job: '#06b6d4',
  payment: '#10b981',
  automation: '#8b5cf6',
  note: '#f59e0b',
  completion: '#22c55e',
};

export function ActivityFeed() {
  return (
    <div
      className="rounded-xl p-6 border border-border"
      style={{
        background: 'var(--card-elevated)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>Live Activity</h3>
          <p className="text-sm text-muted-foreground">Real-time business events and updates</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          <span>Last updated: just now</span>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.type];
          const color = colorMap[activity.type];

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex items-start gap-4 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-secondary/20 hover:shadow-md cursor-pointer"
              style={{
                background: 'var(--card)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="p-2 rounded-lg flex-shrink-0"
                   style={{ background: `${color}20` }}>
                <Icon className="w-4 h-4" style={{ color }} strokeWidth={2} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-sm" style={{ fontWeight: 600 }}>{activity.title}</h4>
                  {activity.user && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] flex-shrink-0"
                         style={{
                           background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                           color: '#0a0b0f',
                           fontWeight: 700
                         }}>
                      {activity.user}
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
