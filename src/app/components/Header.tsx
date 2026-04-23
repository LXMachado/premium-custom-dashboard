import { Search, Bell, Plus, Calendar } from 'lucide-react';

export function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b border-border px-8 py-4 flex items-center justify-between"
            style={{
              background: 'var(--card)',
              backdropFilter: 'blur(20px)',
            }}>
      <div className="flex items-center gap-8">
        <div>
          <h1 className="text-2xl tracking-tight" style={{ fontWeight: 600 }}>Operations Dashboard</h1>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <span>{currentDate}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 ml-2 animate-pulse"
                 style={{ boxShadow: '0 0 8px rgba(74, 222, 128, 0.6)' }} />
            <span className="text-green-400" style={{ fontWeight: 500 }}>Live</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-border w-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            style={{
              background: 'var(--input-background)',
              color: 'var(--foreground)',
            }}
          />
        </div>

        <button
          className="relative p-2 rounded-lg hover:bg-secondary/50 transition-colors"
        >
          <Bell className="w-5 h-5" />
          <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive"
               style={{ boxShadow: '0 0 6px rgba(239, 68, 68, 0.6)' }} />
        </button>

        <button
          className="px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            color: 'var(--primary-foreground)',
            fontWeight: 600,
            boxShadow: '0 4px 16px rgba(34, 211, 238, 0.3)'
          }}
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          Quick Add
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right">
            <div className="text-sm" style={{ fontWeight: 600 }}>Sarah Chen</div>
            <div className="text-xs text-muted-foreground">Admin</div>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                 boxShadow: '0 0 16px rgba(34, 211, 238, 0.4)'
               }}>
            <div className="w-full h-full flex items-center justify-center text-black" style={{ fontWeight: 700 }}>
              SC
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
