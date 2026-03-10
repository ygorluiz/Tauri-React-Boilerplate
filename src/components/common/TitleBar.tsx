import { Minus, Square, X, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useWindow } from '@/composables';

export function TitleBar() {
  const { minimize, toggleMaximize, close, isMaximized } = useWindow();
  const [maximized, setMaximized] = useState(false);

  useEffect(() => {
    const updateMaximized = async () => {
      setMaximized(await isMaximized());
    };
    
    updateMaximized();
    
    // Pequeno intervalo para checar se a janela mudou (ou usar listener do tauri se preferir)
    const interval = setInterval(updateMaximized, 500);
    return () => clearInterval(interval);
  }, [isMaximized]);

  return (
    <div 
      data-tauri-drag-region 
      className="flex items-center justify-between h-8 bg-background/80 backdrop-blur-md border-b select-none fixed top-0 left-0 right-0 z-[100]"
    >
      <div className="flex items-center px-3 gap-2 pointer-events-none">
        <img src="/tauri.svg" className="w-3.5 h-3.5" alt="logo" />
        <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
          Boilerplate
        </span>
      </div>

      <div className="flex h-full items-center">
        <button
          onClick={minimize}
          className="flex items-center justify-center w-11 h-full hover:bg-accent transition-colors"
          title="Minimize"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={toggleMaximize}
          className="flex items-center justify-center w-11 h-full hover:bg-accent transition-colors"
          title={maximized ? "Restore" : "Maximize"}
        >
          {maximized ? <Copy className="w-3 h-3 rotate-180" /> : <Square className="w-3 h-3" />}
        </button>
        <button
          onClick={close}
          className="flex items-center justify-center w-11 h-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
