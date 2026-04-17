export default function Hero() {
  return (
    <section className="flex flex-col gap-6 pt-12">
      <div className="font-mono text-xs text-tertiary flex items-center gap-2">
        <span className="w-2 h-2 bg-tertiary animate-pulse"></span>
        SYS_INIT_COMPLETE // LOGGED_IN
      </div>
      <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-headline font-bold text-on-surface tracking-tight max-w-4xl">
        I architect high-performance software in <span className="text-primary">Go</span> and <span className="text-tertiary">Rust</span> with the same precision I apply to <span className="text-primary">UniFi</span> network stacks and multi-level cedar decks.
      </h2>
      <p className="text-xl text-on-surface-variant max-w-2xl mt-4 font-body leading-relaxed">
        My work is defined by the intersection of digital efficiency and physical structure.
      </p>
    </section>
  );
}
