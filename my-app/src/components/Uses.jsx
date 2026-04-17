export default function Uses() {
  return (
    <section className="flex flex-col gap-8 pb-12">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="font-headline text-2xl font-bold uppercase tracking-widest text-on-surface">Uses</h3>
        <div className="h-px bg-outline-variant/30 flex-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Software */}
        <div>
          <h4 className="font-mono text-sm text-primary mb-6 border-b border-outline-variant/20 pb-2">/usr/bin/software</h4>
          <ul className="flex flex-col gap-4 font-mono text-sm">
            <li className="flex items-start gap-4">
              <span className="text-on-surface-variant mt-0.5">&gt;</span>
              <div>
                <span className="text-on-surface block mb-1">Arch Linux</span>
                <span className="text-xs text-on-surface-variant block font-body">The foundational layer. Minimalist, rolling release.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-on-surface-variant mt-0.5">&gt;</span>
              <div>
                <span className="text-on-surface block mb-1">Neovim</span>
                <span className="text-xs text-on-surface-variant block font-body">Highly customized PDE. Lua configured. Zero mouse dependency.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-on-surface-variant mt-0.5">&gt;</span>
              <div>
                <span className="text-on-surface block mb-1">Zsh</span>
                <span className="text-xs text-on-surface-variant block font-body">Terminal multiplexing and shell environment.</span>
              </div>
            </li>
          </ul>
        </div>
        {/* Hardware */}
        <div>
          <h4 className="font-mono text-sm text-tertiary mb-6 border-b border-outline-variant/20 pb-2">/dev/hardware</h4>
          <ul className="flex flex-col gap-4 font-mono text-sm">
            <li className="flex items-start gap-4">
              <span className="text-on-surface-variant mt-0.5">&gt;</span>
              <div>
                <span className="text-on-surface block mb-1">Pixel 9 Pro XL</span>
                <span className="text-xs text-on-surface-variant block font-body">Mobile communications and rapid image capture.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-on-surface-variant mt-0.5">&gt;</span>
              <div>
                <span className="text-on-surface block mb-1">Raspberry Pi Clusters</span>
                <span className="text-xs text-on-surface-variant block font-body">K3s node testing and localized automation scripts.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-on-surface-variant mt-0.5">&gt;</span>
              <div>
                <span className="text-on-surface block mb-1">Takomo Golf Setup</span>
                <span className="text-xs text-on-surface-variant block font-body">Physical debugging protocol. Iron precision.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
