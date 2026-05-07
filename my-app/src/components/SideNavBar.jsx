import { Link } from 'react-router-dom';

export default function SideNavBar({ currentPath, isOpen, onClose }) {
  const links = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Projects', path: '/projects', icon: 'account_tree' },
    { name: 'Tech_Stack', path: '/tech-stack', icon: 'memory' },
    { name: 'Status', path: '/status', icon: 'analytics' },
  ];

  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Navigation */}
      <nav 
        className={`flex flex-col bg-[#1a1c1f] h-full w-64 border-r-0 fixed top-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header / Identity */}
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
            </div>
            <div>
              <h1 className="text-[#8bceff] font-bold font-mono text-sm uppercase tracking-wider">ROOT_USER</h1>
              <p className="font-mono text-xs text-on-surface-variant">v2.0.4-stable</p>
            </div>
          </div>
          {/* Mobile Close Button */}
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white p-1">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1 py-6 flex flex-col gap-1 font-mono text-sm">
          {links.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link 
                key={link.name}
                to={link.path}
                onClick={onClose} // Close drawer on mobile when link is clicked
                className={
                  isActive
                    ? "bg-[#282a2d] text-[#8bceff] border-l-4 border-[#8bceff] px-4 py-3 flex items-center gap-3"
                    : "text-slate-500 px-4 py-3 hover:bg-[#1a1c1f] hover:text-white transition-colors flex items-center gap-3 border-l-4 border-transparent"
                }
              >
                <span 
                  className="material-symbols-outlined text-[20px]" 
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {link.icon}
                </span>
                {link.name}
              </Link>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="p-6">
          <button className="w-full bg-primary text-on-primary hover:bg-primary-container font-mono text-xs py-3 uppercase tracking-wider transition-colors duration-150 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            DEPLOY_RESUME
          </button>
        </div>
      </nav>
    </>
  );
}
