import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'trilha', label: 'Trilha' },
  { id: 'parcerias', label: 'Parcerias' },
  { id: 'editais', label: 'Editais' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'documentos', label: 'Documentos' },
];

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('inicio');
          }}
          className="font-display text-xl font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0"
        >
          Guia <span className="text-indigo-700">OSC</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              className="text-sm font-medium text-slate-600 hover:text-indigo-700 hover:underline underline-offset-4 decoration-indigo-600 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('diagnostico')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Fazer Diagnóstico
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors duration-150 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 sm:px-6 py-4">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className="py-3 text-base font-medium text-slate-900 border-b border-slate-100 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => handleLinkClick('diagnostico')}
              className="mt-3 w-full py-3 px-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-150 cursor-pointer"
            >
              Fazer Diagnóstico Legal
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
