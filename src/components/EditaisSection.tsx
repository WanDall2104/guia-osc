import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { EDITAL_CHECKLIST_ITEMS, OPEN_CALLS, type OpenCallItem } from '../data/oscData';

interface EditaisSectionProps {
  onNavigate: (sectionId: string) => void;
}

type SphereFilter = 'Todos' | OpenCallItem['sphere'];

const SPHERE_FILTERS: SphereFilter[] = [
  'Todos',
  'Federal',
  'Estadual',
  'Municipal',
  'Incentivo e Privado',
];

export function EditaisSection({ onNavigate }: EditaisSectionProps) {
  const [selectedSphere, setSelectedSphere] = useState<SphereFilter>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState<OpenCallItem | null>(null);

  const filteredCalls = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return OPEN_CALLS.filter((item) => {
      const matchesSphere = selectedSphere === 'Todos' || item.sphere === selectedSphere;
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.modality.toLowerCase().includes(query);
      return matchesSphere && matchesQuery;
    });
  }, [selectedSphere, searchQuery]);

  return (
    <section id="editais" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-mono font-semibold text-indigo-700 mb-2">
            03. Editais Abertos e Portais Oficiais
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Onde acompanhar chamamentos públicos e oportunidades de captação.
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            Em regra, termos de colaboração e fomento são precedidos de chamamento público. Consulte os portais oficiais da União, do Paraná e do seu município e prepare sua proposta com antecedência.
          </p>
        </div>

        {/* Filter bar + Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-200">
          <div
            role="group"
            aria-label="Filtrar editais por esfera"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl"
          >
            {SPHERE_FILTERS.map((sphere) => (
              <button
                key={sphere}
                type="button"
                onClick={() => setSelectedSphere(sphere)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedSphere === sphere
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {sphere}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema ou esfera..."
              aria-label="Buscar editais e portais"
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Two-column layout: open calls list + 8-point reading guide */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-4">
            {filteredCalls.length === 0 ? (
              <div className="py-12 text-center border border-slate-200 rounded-2xl bg-slate-50">
                <p className="text-sm font-semibold text-slate-900">
                  Nenhuma oportunidade encontrada para esse filtro.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSphere('Todos');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-sm font-semibold text-indigo-700 hover:underline underline-offset-4 cursor-pointer"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              filteredCalls.map((call) => (
                <article
                  key={call.id}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500 mb-2">
                    <span className="text-indigo-700 font-semibold">{call.sphere}</span>
                    <span aria-hidden="true">·</span>
                    <span>{call.modality}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-medium">{call.status}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
                    {call.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 mb-4 max-w-2xl">
                    {call.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-5">
                    <button
                      type="button"
                      onClick={() => setActiveItem(call)}
                      className="text-sm font-semibold text-indigo-700 hover:underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                    >
                      Ver requisitos e documentos
                    </button>

                    {call.officialPortalUrl.startsWith('#') ? (
                      <button
                        type="button"
                        onClick={() => onNavigate(call.officialPortalUrl.slice(1))}
                        className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>{call.officialPortalLabel}</span>
                      </button>
                    ) : (
                      <a
                        href={call.officialPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>{call.officialPortalLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>

          {/* 8 points every edital informs */}
          <aside className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-xs font-mono font-semibold text-indigo-700 mb-1.5">
              Leitura obrigatória
            </p>
            <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
              8 pontos para conferir em todo edital
            </h3>
            <p className="text-xs leading-relaxed text-slate-600 mb-5">
              Antes de inscrever sua OSC em um chamamento público, confira estes itens no documento oficial:
            </p>
            <ol className="space-y-3">
              {EDITAL_CHECKLIST_ITEMS.map((item, idx) => (
                <li
                  key={item}
                  className="text-sm leading-snug text-slate-800 flex items-start gap-2.5"
                >
                  <span className="font-mono text-xs font-semibold text-indigo-700 mt-0.5 tabular-nums shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>

      {/* Modal Detail View */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="edital-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <p className="text-xs font-mono font-semibold text-indigo-700 mb-1">
                  {activeItem.sphere} · {activeItem.status}
                </p>
                <h3
                  id="edital-modal-title"
                  className="font-display text-2xl font-bold text-slate-950"
                >
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Fechar detalhes"
                onClick={() => setActiveItem(null)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-5">
              <div>
                <p className="text-xs font-mono text-slate-500 mb-1">Quem pode participar</p>
                <p className="text-sm leading-relaxed text-slate-800">{activeItem.whoCanApply}</p>
              </div>

              <div>
                <p className="text-xs font-mono text-slate-500 mb-2">
                  Documentos normalmente exigidos
                </p>
                <ul className="space-y-2">
                  {activeItem.essentialDocs.map((doc) => (
                    <li key={doc} className="text-sm text-slate-800 flex items-start gap-2.5">
                      <span className="text-indigo-600 font-mono text-xs mt-0.5">—</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <p className="text-xs font-mono font-semibold text-emerald-800 mb-1">
                  Dica prática
                </p>
                <p className="text-sm leading-relaxed text-emerald-950">{activeItem.tip}</p>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 cursor-pointer"
              >
                Fechar
              </button>

              {activeItem.officialPortalUrl.startsWith('#') ? (
                <button
                  type="button"
                  onClick={() => {
                    const target = activeItem.officialPortalUrl.slice(1);
                    setActiveItem(null);
                    onNavigate(target);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors cursor-pointer"
                >
                  <span>{activeItem.officialPortalLabel}</span>
                </button>
              ) : (
                <a
                  href={activeItem.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors"
                >
                  <span>{activeItem.officialPortalLabel}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
