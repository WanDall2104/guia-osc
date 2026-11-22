import { ARTICLE_ADVISOR, ARTICLE_AUTHORS } from '../data/oscData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPdfModal: () => void;
}

export function Footer({ onNavigate, onOpenPdfModal }: FooterProps) {
  return (
    <footer className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-200">
          <div className="md:col-span-5 space-y-3">
            <p className="font-display text-xl font-bold text-slate-950">
              Guia <span className="text-indigo-700">OSC</span>
            </p>
            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              Portal interativo de apoio à constituição, regularização, transparência e captação de recursos para Organizações da Sociedade Civil.
            </p>
            <p className="text-xs leading-relaxed text-slate-500">
              Material orientativo inicial. Não substitui a consulta aos órgãos públicos competentes, cartórios ou assessoria jurídica e contábil.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs font-mono font-semibold text-slate-500">Navegação</p>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                { id: 'trilha', label: 'Trilha de Criação e Finanças' },
                { id: 'parcerias', label: 'Parcerias e Simulador MROSC' },
                { id: 'editais', label: 'Editais e Portais Oficiais' },
                { id: 'diagnostico', label: 'Diagnóstico Legal' },
                { id: 'documentos', label: 'Modelos para Download' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="hover:text-indigo-700 hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenPdfModal}
                  className="text-indigo-700 font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  Ler Artigo Original (PDF)
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <p className="text-xs font-mono font-semibold text-slate-500">Fundamentação Legal</p>
            <ul className="space-y-1.5 text-xs leading-relaxed text-slate-600">
              <li>Constituição Federal de 1988 (arts. 5º, XVII e 37)</li>
              <li>Lei nº 13.019/2014 — Marco Regulatório das OSCs (MROSC)</li>
              <li>Lei nº 10.406/2002 — Código Civil (arts. 45, 54 e 59)</li>
              <li>Lei nº 6.015/1973 — Lei dos Registros Públicos</li>
              <li>Lei nº 14.597/2023 — Lei Geral do Esporte</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Pesquisa em Direito — UniSENAI PR: {ARTICLE_AUTHORS.join(', ')} · {ARTICLE_ADVISOR}.
          </p>
          <p className="font-mono shrink-0 text-slate-600">Guia OSC · MROSC</p>
        </div>
      </div>
    </footer>
  );
}
