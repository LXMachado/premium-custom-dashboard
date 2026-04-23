import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { KPICard } from './components/KPICard';
import { RevenueChart } from './components/RevenueChart';
import { LeadSourceChart } from './components/LeadSourceChart';
import { WorkflowBoard } from './components/WorkflowBoard';
import { AutomationCard } from './components/AutomationCard';
import { ActivityFeed } from './components/ActivityFeed';
import {
  DollarSign,
  UserPlus,
  Briefcase,
  TrendingUp,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const kpiData = [
  {
    title: 'Revenue This Month',
    value: '$95,420',
    change: 12.5,
    icon: DollarSign,
    data: [45, 52, 48, 61, 58, 67, 72, 69, 78, 84, 91, 95],
    color: '#22d3ee',
  },
  {
    title: 'New Leads',
    value: '127',
    change: 8.3,
    icon: UserPlus,
    data: [80, 85, 78, 92, 88, 95, 102, 98, 108, 115, 120, 127],
    color: '#06b6d4',
  },
  {
    title: 'Jobs In Progress',
    value: '34',
    change: -2.1,
    icon: Briefcase,
    data: [42, 40, 38, 36, 35, 37, 36, 34, 35, 33, 34, 34],
    color: '#0891b2',
  },
  {
    title: 'Completion Rate',
    value: '94.2%',
    change: 5.7,
    icon: CheckCircle2,
    data: [88, 89, 90, 89, 91, 92, 91, 93, 92, 94, 93, 94],
    color: '#10b981',
  },
  {
    title: 'Avg Response Time',
    value: '1.2h',
    change: -15.3,
    icon: Clock,
    data: [2.8, 2.5, 2.3, 2.0, 1.8, 1.6, 1.5, 1.4, 1.3, 1.3, 1.2, 1.2],
    color: '#8b5cf6',
  },
  {
    title: 'Active Automations',
    value: '18',
    change: 20.0,
    icon: TrendingUp,
    data: [12, 12, 13, 14, 14, 15, 15, 16, 17, 17, 18, 18],
    color: '#f59e0b',
  },
];

const automations = [
  {
    title: 'New Lead Notification',
    trigger: 'Lead captured',
    action: 'Notify team',
    status: 'active' as const,
    executions: 1247,
  },
  {
    title: 'Invoice Reminder',
    trigger: 'Invoice overdue',
    action: 'Send reminder',
    status: 'active' as const,
    executions: 89,
  },
  {
    title: 'Review Request',
    trigger: 'Job completed',
    action: 'Request review',
    status: 'active' as const,
    executions: 456,
  },
  {
    title: 'CRM Integration',
    trigger: 'Form submitted',
    action: 'Create CRM entry',
    status: 'paused' as const,
    executions: 723,
  },
];

export default function App() {
  return (
    <div className="size-full flex dark relative"
         style={{
           background: 'linear-gradient(135deg, #0a0b0f 0%, #14161e 50%, #0a0b0f 100%)',
         }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
             backgroundSize: '40px 40px',
           }} />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             mixBlendMode: 'overlay',
           }} />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none blur-3xl"
           style={{
             background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
           }} />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-10 pointer-events-none blur-3xl"
           style={{
             background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
           }} />

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        <Header />

        <main className="flex-1 overflow-y-auto relative">
          <div className="p-8 space-y-8">
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              {kpiData.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <KPICard {...kpi} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <RevenueChart />
              <LeadSourceChart />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <WorkflowBoard />
            </motion.div>

            <div className="grid grid-cols-3 gap-6">
              <motion.div
                className="col-span-2 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div
                  className="rounded-xl p-6 border border-border"
                  style={{
                    background: 'var(--card-elevated)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>Active Automations</h3>
                    <p className="text-sm text-muted-foreground">Automated workflows running in your business</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {automations.map((automation, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                      >
                        <AutomationCard {...automation} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <ActivityFeed />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}