import {
  LayoutDashboard,
  Users,
  Briefcase,
  DollarSign,
  BarChart3,
  Zap,
  UserCog,
  Settings
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Leads / Clients' },
  { icon: Briefcase, label: 'Jobs / Orders' },
  { icon: DollarSign, label: 'Finance' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Zap, label: 'Automations' },
  { icon: UserCog, label: 'Team' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <aside className="w-20 border-r border-sidebar-border flex flex-col items-center py-6 gap-2"
           style={{
             background: 'var(--sidebar)',
             backdropFilter: 'blur(20px)',
           }}>
      <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl"
           style={{
             background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
             boxShadow: '0 8px 24px rgba(34, 211, 238, 0.3)'
           }}>
        <Zap className="w-6 h-6 text-black" strokeWidth={2.5} />
      </div>

      <nav className="flex flex-col gap-1 w-full px-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="group relative flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-lg transition-all duration-300"
              style={{
                background: item.active ? 'var(--sidebar-accent)' : 'transparent',
                color: item.active ? 'var(--sidebar-accent-foreground)' : 'var(--muted-foreground)',
              }}
            >
              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={item.active ? 2.5 : 2} />
              <span className="text-[9px] uppercase tracking-wider" style={{ fontWeight: item.active ? 600 : 500 }}>
                {item.label.split(' ')[0]}
              </span>
              {item.active && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r"
                  style={{
                    background: 'linear-gradient(180deg, #22d3ee 0%, #06b6d4 100%)',
                    boxShadow: '0 0 12px rgba(34, 211, 238, 0.6)'
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
