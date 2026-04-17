export default function Footer() {
  return (
    <footer className="mt-auto bg-[#1a1c1f] w-full px-8 py-4 flex justify-between items-center border-t border-[#333538]/20 font-mono text-xs uppercase tracking-tighter">
      <div className="text-[#8bceff] font-bold">
        © 2024 SYSTEM_ARCHITECT [STABLE_BUILD]
      </div>
      <div className="flex gap-6 snappy transition-all">
        <a className="text-slate-500 hover:text-[#ffb59e] hover:underline decoration-[#8bceff]" href="#">GitHub</a>
        <a className="text-slate-500 hover:text-[#ffb59e] hover:underline decoration-[#8bceff]" href="#">LinkedIn</a>
        <a className="text-slate-500 hover:text-[#ffb59e] hover:underline decoration-[#8bceff]" href="#">Source</a>
        <a className="text-slate-500 hover:text-[#ffb59e] hover:underline decoration-[#8bceff]" href="#">Docs</a>
      </div>
    </footer>
  );
}
