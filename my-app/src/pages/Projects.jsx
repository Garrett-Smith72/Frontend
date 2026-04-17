export default function Projects() {
  const projects = [
    {
      id: "PROJ-01",
      title: "Antigravity CLI Core",
      status: "PRODUCTION",
      tech: "Rust // Tokio",
      desc: "A high-performance CLI written in Rust for orchestrating robust developer environments. Achieves 0ms latency in process delegation.",
      date: "2024-Q2"
    },
    {
      id: "PROJ-02",
      title: "Prosumer Network Mesh",
      status: "ACTIVE",
      tech: "UniFi // Ansible",
      desc: "An automated provisioning system for localized APs ensuring zero downtime during core FW reinstalls. Includes automated failover over 5G.",
      date: "2024-Q1"
    },
    {
      id: "PROJ-03",
      title: "System Telemetry Daemon",
      status: "BETA",
      tech: "Go // gRPC",
      desc: "A headless daemon collecting deep kernel states and projecting them to a local instance via gRPC channels.",
      date: "2023-Q4"
    }
  ];

  return (
    <div className="flex-1 p-8 md:p-16 max-w-6xl mx-auto w-full flex flex-col gap-12">
      <section className="flex flex-col gap-6 pt-12">
        <div className="font-mono text-xs text-tertiary flex items-center gap-2">
          <span className="w-2 h-2 bg-tertiary animate-pulse"></span>
          ROUTING // PROJECTS_INDEX
        </div>
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-headline font-bold text-on-surface tracking-tight">
          Project Repository
        </h2>
        <div className="h-px bg-outline-variant/30 w-full mt-4"></div>
      </section>

      <section className="flex flex-col gap-12">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-150 p-8 flex flex-col gap-6 relative group border border-outline-variant/10">
            <div className="flex justify-between items-center font-mono text-xs text-on-surface-variant border-b border-outline-variant/20 pb-4">
              <span>{proj.id}</span>
              <span className={proj.status === 'PRODUCTION' ? "text-primary" : "text-tertiary"}>[{proj.status}]</span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">{proj.title}</h3>
                <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant font-mono text-[10px] uppercase border border-outline-variant/20 inline-block">
                  {proj.tech}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm font-body max-w-md leading-relaxed">
                {proj.desc}
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-outline-variant/20 flex justify-between items-center">
              <span className="font-mono text-xs text-outline">{proj.date}</span>
              <a href="#" className="font-mono text-xs text-primary flex items-center gap-2 hover:text-white transition-colors">
                VIEW_SOURCE <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
