export default function MobileHeader({ onMenuClick }) {
  return (
    <div className="md:hidden flex items-center justify-between bg-[#1a1c1f] p-4 border-b border-outline-variant/10 fixed top-0 w-full z-40">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center border border-outline-variant/30">
          <span className="material-symbols-outlined text-primary text-sm" data-icon="terminal">terminal</span>
        </div>
        <h1 className="text-[#8bceff] font-bold font-mono text-sm uppercase tracking-wider">ROOT_USER</h1>
      </div>
      <button 
        onClick={onMenuClick}
        className="text-slate-400 hover:text-white p-2 rounded-md hover:bg-[#282a2d] transition-colors"
      >
        <span className="material-symbols-outlined text-[24px]">menu</span>
      </button>
    </div>
  );
}
