export default function TechStack() {
  const stackGroups = [
    {
      category: "Core Languages",
      items: [
        { name: "Rust", detail: "Memory safety, zero-cost abstractions, axum framework" },
        { name: "Go", detail: "High concurrency, microservices, gRPC implementations" },
        { name: "TypeScript", detail: "Type-safe frontend logic, robust tooling" }
      ]
    },
    {
      category: "Infrastructure & Ops",
      items: [
        { name: "Arch Linux", detail: "Rolling release host systems, customized Neovim PDEs" },
        { name: "K3s", detail: "Lightweight generic Kubernetes deployment for RPis" },
        { name: "UniFi OS", detail: "Deep packet inspection, physical routing, VLAN isolation" }
      ]
    },
    {
      category: "Frontend Layer",
      items: [
        { name: "React + Vite", detail: "Declarative component composition, fast HMR" },
        { name: "Tailwind CSS", detail: "Utility-first precision styling, custom design systems" }
      ]
    }
  ];

  return (
    <div className="flex-1 p-8 md:p-16 max-w-6xl mx-auto w-full flex flex-col gap-12">
      <section className="flex flex-col gap-6 pt-12">
        <div className="font-mono text-xs text-tertiary flex items-center gap-2">
          <span className="w-2 h-2 bg-tertiary animate-pulse"></span>
          ROUTING // TECH_STACK
        </div>
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-headline font-bold text-on-surface tracking-tight">
          Technology Infrastructure
        </h2>
        <div className="h-px bg-outline-variant/30 w-full mt-4"></div>
      </section>

      <section className="flex flex-col gap-16">
        {stackGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-6">
            <h3 className="font-mono text-sm text-primary uppercase tracking-widest border-b border-outline-variant/20 pb-2">
              /usr/lib/{group.category.toLowerCase().replace(/ /g, '_')}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {group.items.map(item => (
                <div key={item.name} className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 border border-outline-variant/10 flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-outline group-hover:text-tertiary transition-colors">deployed_code</span>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-on-surface mb-2">{item.name}</h4>
                    <p className="text-sm font-body text-on-surface-variant leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
