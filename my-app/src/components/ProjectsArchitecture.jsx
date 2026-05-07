export default function ProjectsArchitecture({ status }) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="font-headline text-2xl font-bold uppercase tracking-widest text-on-surface">Projects Architecture</h3>
        <div className="h-px bg-outline-variant/30 flex-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
        {/* The Backend (Span 2) */}
        <div className="md:col-span-2 bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container-high transition-colors duration-150 p-8 flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-9xl">dns</span>
          </div>
          <div className="flex justify-between items-start mb-12 relative z-10">
            <div>
              <h4 className="font-headline text-xl text-primary font-bold mb-2">The Backend</h4>
              <p className="text-sm font-mono text-on-surface-variant">terminal-centric workflows & efficiency</p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">terminal</span>
          </div>
          <div className="mt-auto relative z-10">
            <div className="flex gap-3 mb-4">
              <span className="px-2 py-1 bg-surface-container-highest text-primary font-mono text-xs border border-outline-variant/20">Go</span>
              <span className="px-2 py-1 bg-surface-container-highest text-tertiary font-mono text-xs border border-outline-variant/20">Rust</span>
              <span className="px-2 py-1 bg-surface-container-highest text-on-surface text-xs font-mono border border-outline-variant/20">SQL</span>
            </div>
            <p className="text-on-surface-variant text-sm font-body max-w-md">Building low-latency microservices and robust database architectures designed for maximum throughput and minimal resource footprint.</p>
          </div>
        </div>
        {/* The Network */}
        <div className="bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container-high transition-colors duration-150 p-8 flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-start mb-8 relative z-10">
            <h4 className="font-headline text-xl text-on-surface font-bold">The Network</h4>
            <span className="material-symbols-outlined text-primary">router</span>
          </div>
          <p className="text-on-surface-variant text-sm font-body mb-6 relative z-10">Documenting prosumer infrastructure, 10-inch racks, UniFi deployment, and robust home automation protocols.</p>
          <div className="mt-auto flex flex-col gap-2 relative z-10">
            <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant border-b border-outline-variant/20 pb-2">
              <span>Uptime</span>
              <span className="text-primary">{status?.uptime || '99.99%'}</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant border-b border-outline-variant/20 pb-2">
              <span>Nodes</span>
              <span>{status ? `${status.active_nodes} Active` : '24 Active'}</span>
            </div>
          </div>
        </div>
        {/* The Build (Full Span) */}
        <div className="md:col-span-3 bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-low transition-colors duration-150 p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          <div className="w-full md:w-1/3 aspect-video bg-surface-container-high relative border border-outline-variant/30">
            <img className="w-full h-full object-cover mix-blend-luminosity opacity-60" alt="architectural close up of structural wood beams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoCglFrX_rEGdjVvVy-itQUT08IhpSotJgZCtb4cahDmitOGlnrVJOLZ1hoWNIgh6IoJIOpNwMD1fRZdjNxPdpchQ6Ur7JQsXAZ9b7thIDSKmI3Zd-7myBggWBbgMtiJjmYxkTwaRxnkRB9wbdRyL13oslGVmMstN8OaEs4Ntgimoiw13YeKQd-1E0hnockBdNiEppoQ3dR_FH9TFXpolZbTpomVPM_Y99XloaGyUxv1cmJ-QQoj3q0sNdQNo2bMEN5N8_rl8cGolJ"/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
          </div>
          <div className="flex-1 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="font-headline text-xl text-tertiary font-bold">The Build</h4>
              <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant font-mono text-[10px] uppercase border border-outline-variant/20">Dev_Log</span>
            </div>
            <p className="text-on-surface-variant text-sm font-body mb-4 max-w-xl">A technical deep-dive into residential renovations. Applying systems engineering principles to interior remodeling. Structural integrity meets aesthetic precision.</p>
            <a className="text-primary text-sm font-mono flex items-center gap-1 hover:text-white transition-colors w-fit group" href="#">
              READ_LOGS <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
