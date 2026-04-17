export default function Status({ status }) {
  // Use mock values if actual status is not yet available
  const systemStatus = status || { status: 'INITIALIZING...', uptime: '...', active_nodes: '...', lines_of_code: '...' };

  return (
    <div className="flex-1 p-8 md:p-16 max-w-6xl mx-auto w-full flex flex-col gap-12">
      <section className="flex flex-col gap-6 pt-12">
        <div className="font-mono text-xs text-primary flex items-center gap-2">
          <span className="w-2 h-2 bg-primary animate-pulse"></span>
          ROUTING // SYSTEM_STATUS
        </div>
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-headline font-bold text-on-surface tracking-tight">
          Telemetry & Health
        </h2>
        <div className="h-px bg-outline-variant/30 w-full mt-4"></div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container-low p-6 border border-outline-variant/10 flex flex-col gap-4">
          <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Network Status</span>
          <div className="text-3xl font-headline font-bold text-primary">{systemStatus.status}</div>
          <p className="font-mono text-[10px] text-outline mt-auto">Gateway latency: ~7ms</p>
        </div>

        <div className="bg-surface-container-low p-6 border border-outline-variant/10 flex flex-col gap-4">
          <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Core Uptime</span>
          <div className="text-3xl font-headline font-bold text-on-surface">{systemStatus.uptime}</div>
          <p className="font-mono text-[10px] text-outline mt-auto">Excludes scheduled maintenance</p>
        </div>

        <div className="bg-surface-container-low p-6 border border-outline-variant/10 flex flex-col gap-4">
          <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Active Nodes</span>
          <div className="text-3xl font-headline font-bold text-on-surface">{systemStatus.active_nodes}</div>
          <p className="font-mono text-[10px] text-outline mt-auto">Edge servers & local proxies</p>
        </div>

        <div className="bg-surface-container-low p-6 border border-outline-variant/10 flex flex-col gap-4">
          <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Lines of Code</span>
          <div className="text-3xl font-headline font-bold text-on-surface">{systemStatus.lines_of_code}</div>
          <p className="font-mono text-[10px] text-outline mt-auto">Across monorepo (tracked)</p>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <h3 className="font-mono text-sm text-tertiary uppercase tracking-widest border-b border-outline-variant/20 pb-2">
          /var/log/system.log
        </h3>
        <div className="bg-[#0c0e11] p-6 font-mono text-xs text-on-surface border border-outline-variant/20 flex flex-col gap-2 rounded-none max-h-64 overflow-y-auto">
          <div className="flex gap-4"><span className="text-outline">[12:44:01]</span><span className="text-primary">[INFO]</span><span>Backend daemon successfully allocated memory block 0x4aF91.</span></div>
          <div className="flex gap-4"><span className="text-outline">[12:44:03]</span><span className="text-primary">[INFO]</span><span>Establishing Web Socket to metrics server... established.</span></div>
          <div className="flex gap-4"><span className="text-outline">[12:44:11]</span><span className="text-tertiary">[WARN]</span><span>Dropping fragmented packets from edge router. Mitigation active.</span></div>
          <div className="flex gap-4"><span className="text-outline">[12:45:00]</span><span className="text-primary">[INFO]</span><span>System running optimally. Checking cron definitions... OK.</span></div>
          <div className="flex gap-4"><span className="text-outline">[12:46:12]</span><span className="text-primary">[INFO]</span><span>Request payload delivered via React Router transition gracefully.</span></div>
          <div className="flex gap-4 mt-4 animate-pulse"><span className="text-primary">_</span></div>
        </div>
      </section>
    </div>
  );
}
