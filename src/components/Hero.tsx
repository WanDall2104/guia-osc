import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  FileText,
  Landmark,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { ARTICLE_ADVISOR, ARTICLE_AUTHORS, type ReadingMode } from '../data/oscData';

interface HeroProps {
  mode: ReadingMode;
  onChangeMode: (mode: ReadingMode) => void;
  onNavigate: (sectionId: string) => void;
  onOpenPdfModal: () => void;
}

const OVERVIEW_TILES = [
  {
    number: '01',
    sectionId: 'trilha',
    title: '6 Etapas de Criação',
    description: 'Do estatuto com cláusulas do MROSC ao cartório, CNPJ e contabilidade.',
    icon: ClipboardCheck,
    accentClass: 'text-indigo-600 group-hover:text-indigo-700',
    hoverBorder: 'hover:border-indigo-300 hover:bg-indigo-50/50',
  },
  {
    number: '02',
    sectionId: 'parcerias',
    title: '3 Instrumentos',
    description: 'Simulador interativo de Colaboração, Fomento e Cooperação.',
    icon: Scale,
    accentClass: 'text-blue-600 group-hover:text-blue-700',
    hoverBorder: 'hover:border-blue-300 hover:bg-blue-50/50',
  },
  {
    number: '03',
    sectionId: 'editais',
    title: 'Editais e Captação',
    description: 'Portais oficiais, esporte, leis de incentivo, emendas e patrocínios.',
    icon: Landmark,
    accentClass: 'text-emerald-600 group-hover:text-emerald-700',
    hoverBorder: 'hover:border-emerald-300 hover:bg-emerald-50/50',
  },
  {
    number: '04',
    sectionId: 'diagnostico',
    title: 'Diagnóstico e Modelos',
    description: 'Avalie a adequação legal da OSC e baixe documentos prontos.',
    icon: ShieldCheck,
    accentClass: 'text-amber-600 group-hover:text-amber-700',
    hoverBorder: 'hover:border-amber-300 hover:bg-amber-50/50',
  },
];

export function Hero({ mode, onChangeMode, onNavigate, onOpenPdfModal }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200"
    >
      {/* Subtle diffused ambient accents matching guiaosc.ai.studio */}
      <div className="absolute inset-0 pointer-events-none opacity-45" aria-hidden="true">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-indigo-200/70 rounded-full blur-3xl" />
        <div className="absolute top-56 -left-24 w-80 h-80 bg-blue-200/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top metadata + Reading Mode Switcher toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-200/80">
          <p className="text-xs font-mono text-slate-600">
            <span className="text-indigo-700 font-semibold">Pesquisa em Direito · UniSENAI PR</span>
            <span aria-hidden="true"> · </span>
            <span>Lei nº 13.019/2014 (MROSC) e Código Civil</span>
          </p>

          <div
            role="group"
            aria-label="Modo de leitura do conteúdo"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg self-start sm:self-auto"
          >
            <button
              type="button"
              onClick={() => onChangeMode('plain')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                mode === 'plain'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Linguagem Simples</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeMode('legal')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                mode === 'legal'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Scale className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Modo Jurídico</span>
            </button>
          </div>
        </div>

        {/* 7 / 5 Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[3.1rem] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Orientação e Apoio às{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-900">
                Organizações da Sociedade Civil (OSCs)
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {mode === 'plain'
                ? 'Um portal simples, direto e prático para criar sua organização, mantê-la 100% regularizada, encontrar editais abertos e prestar contas com transparência.'
                : 'Plataforma prática e fundamentada na Constituição Federal (arts. 5º, XVII e 37), Código Civil (arts. 45, 54 e 59), Lei nº 6.015/1973 e Marco Regulatório das OSCs (Lei nº 13.019/2014).'}
            </p>

            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-700">Base acadêmica: </span>
              {ARTICLE_AUTHORS.join(', ')} · Orientação: {ARTICLE_ADVISOR}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('trilha')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explorar Trilha de Criação</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenPdfModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                <span>Ler Artigo Completo (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Overview Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg shadow-slate-200/50 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-semibold text-slate-600">
                  Visão Geral do Portal
                </span>
                <span className="text-xs font-mono text-indigo-700 font-medium">
                  Lei 13.019/2014 · CC
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
                {OVERVIEW_TILES.map((tile) => {
                  const Icon = tile.icon;
                  return (
                    <button
                      key={tile.number}
                      type="button"
                      onClick={() => onNavigate(tile.sectionId)}
                      className={`p-4 rounded-xl bg-slate-50 border border-slate-200/90 transition-colors duration-150 text-left group cursor-pointer ${tile.hoverBorder}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-5 h-5 ${tile.accentClass}`} aria-hidden="true" />
                        <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                          {tile.number}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-slate-900 mb-1">
                        {tile.title}
                      </div>
                      <p className="text-xs text-slate-600 leading-snug">
                        {tile.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/90 text-xs text-amber-950 leading-relaxed">
                <span className="font-bold text-amber-800">Ponto Crítico: </span>
                O recurso público repassado em parceria{' '}
                <strong className="font-semibold">não vira patrimônio livre da OSC</strong>.
                Exige conta exclusiva em banco público e rastreabilidade eletrônica.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
