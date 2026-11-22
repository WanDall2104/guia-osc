import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  FUNDING_CHANNELS,
  PARTNERSHIP_INSTRUMENTS,
  type ReadingMode,
} from '../data/oscData';

interface PartnershipsSectionProps {
  mode: ReadingMode;
  onOpenTemplate: (docId: string) => void;
}

export function PartnershipsSection({ mode, onOpenTemplate }: PartnershipsSectionProps) {
  const [proposer, setProposer] = useState<'admin' | 'osc'>('admin');
  const [hasTransfer, setHasTransfer] = useState<boolean>(true);

  const recommendedId: 'colaboracao' | 'fomento' | 'cooperacao' = !hasTransfer
    ? 'cooperacao'
    : proposer === 'admin'
      ? 'colaboracao'
      : 'fomento';

  const recommendedInstrument =
    PARTNERSHIP_INSTRUMENTS.find((item) => item.id === recommendedId) ??
    PARTNERSHIP_INSTRUMENTS[0];

  return (
    <section id="parcerias" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-mono font-semibold text-indigo-700 mb-2">
            02. Parcerias e Fontes de Captação · Marco Regulatório (Lei nº 13.019/2014)
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Os 3 Instrumentos de Parceria com o Poder Público: qual utilizar?
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            {mode === 'plain'
              ? 'Transparência atrai parceiros e planejamento sustenta projetos. Use o simulador abaixo para descobrir exatamente qual termo do MROSC se aplica à sua parceria.'
              : 'Diferenciação dos instrumentos estatuídos nos arts. 2º, VIII-A, e 17 da Lei nº 13.019/2014 sob o princípio da vinculação orçamentário-finalística (Di Pietro, 2019).'}
          </p>
        </div>

        {/* Simulador Interativo MROSC (guiaosc.ai.studio dark indigo showcase) */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-12">
          <p className="text-xs font-mono font-semibold text-indigo-300 mb-5">
            Simulador Interativo MROSC · Descubra o instrumento em 2 cliques
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs font-semibold text-indigo-200 mb-2.5">
                  1. Quem está propondo a ideia do projeto?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setProposer('admin')}
                    className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-colors cursor-pointer ${
                      proposer === 'admin'
                        ? 'bg-indigo-600 border-indigo-400 text-white'
                        : 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    O Poder Público
                    <span className="block text-xs font-normal text-indigo-200 mt-0.5">
                      Prefeitura, Estado ou União
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProposer('osc')}
                    className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-colors cursor-pointer ${
                      proposer === 'osc'
                        ? 'bg-indigo-600 border-indigo-400 text-white'
                        : 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    A própria OSC
                    <span className="block text-xs font-normal text-indigo-200 mt-0.5">
                      Projeto criado pela entidade
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-indigo-200 mb-2.5">
                  2. Haverá repasse de dinheiro público?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setHasTransfer(true)}
                    className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-colors cursor-pointer ${
                      hasTransfer
                        ? 'bg-indigo-600 border-indigo-400 text-white'
                        : 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    Sim, com repasse financeiro
                    <span className="block text-xs font-normal text-indigo-200 mt-0.5">
                      Exige conta exclusiva
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasTransfer(false)}
                    className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-colors cursor-pointer ${
                      !hasTransfer
                        ? 'bg-indigo-600 border-indigo-400 text-white'
                        : 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    Não há transferência de verba
                    <span className="block text-xs font-normal text-indigo-200 mt-0.5">
                      Cessão de espaço ou apoio mútuo
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Simulator Result */}
            <div className="lg:col-span-6 bg-white/10 border border-white/15 rounded-xl p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/15">
                <span className="text-xs font-mono text-emerald-300 font-semibold">
                  Instrumento indicado
                </span>
                <span className="text-xs font-mono text-indigo-200">
                  {recommendedInstrument.article}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {recommendedInstrument.name}
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {mode === 'plain'
                    ? recommendedInstrument.plainSummary
                    : recommendedInstrument.legalSummary}
                </p>
              </div>

              <ul className="space-y-2 pt-2">
                {recommendedInstrument.obligations.map((ob) => (
                  <li key={ob} className="text-xs text-indigo-100 flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{ob}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3 MROSC instrument cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {PARTNERSHIP_INSTRUMENTS.map((item) => {
            const isHighlighted = item.id === recommendedId;
            return (
              <article
                key={item.id}
                className={`bg-white rounded-2xl p-6 border flex flex-col justify-between transition-colors ${
                  isHighlighted ? 'border-indigo-400 shadow-sm' : 'border-slate-200'
                }`}
              >
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-2">{item.article}</p>
                  <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-700 pb-3 mb-3 border-b border-slate-100">
                    {item.origin} · {item.transfer}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 mb-4">
                    {mode === 'plain' ? item.plainSummary : item.legalSummary}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-mono text-slate-500 mb-1">Exemplo de aplicação</p>
                  <p className="text-xs leading-relaxed text-slate-800">{item.idealFor}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* 4 additional funding channels */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-950">
              Outras fontes de captação para fortalecer sua OSC
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Combine recursos públicos e privados com segurança jurídica e clareza.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenTemplate('modelo-plano-trabalho')}
            className="text-sm font-semibold text-indigo-700 hover:underline underline-offset-4 whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
          >
            Abrir Modelo de Plano de Trabalho
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FUNDING_CHANNELS.map((channel) => (
            <article
              key={channel.number}
              className="bg-white border border-slate-200 rounded-2xl p-6"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span className="font-mono text-xs font-semibold text-indigo-700 tabular-nums">
                  {channel.number}.
                </span>
                <span className="text-xs text-slate-500">{channel.subtitle}</span>
              </div>
              <h4 className="font-display text-lg font-bold text-slate-950 mb-2">
                {channel.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-600 mb-3">
                {channel.summary}
              </p>
              <p className="text-xs text-slate-800 bg-slate-50 border border-slate-200/80 rounded-lg p-3">
                <span className="font-semibold text-indigo-800">Ponto de atenção: </span>
                {channel.keyRequirement}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
