export default function StatusLine({ status }) {
  if (!status) return null;

  return (
    <div className="fixed bottom-0 left-64 right-0 h-8 bg-surface-container-highest border-t border-outline-variant/30 flex items-center px-4 font-mono text-[10px] text-on-surface-variant justify-between z-40 hidden md:flex">
      <div className="flex items-center gap-4">
        <span className="text-primary font-bold">{status.status || 'NORMAL'}</span>
        <span className="border-l border-outline-variant/30 h-4"></span>
        <span>{status.file_path || 'portfolio/index.html'}</span>
      </div>
      <div className="flex items-center gap-4">
        <span>{status.encoding || 'utf-8'}</span>
        <span className="border-l border-outline-variant/30 h-4"></span>
        <span>{status.languages || 'HTML, CSS'}</span>
        <span className="border-l border-outline-variant/30 h-4"></span>
        <span>100%</span>
        <span className="text-primary">☰ {status.lines_of_code || '1,240'}</span>
      </div>
    </div>
  );
}
