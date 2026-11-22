import { useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Scale,
  ShieldAlert,
} from 'lucide-react';
import {
  CONSTITUTION_STEPS,
  FINANCIAL_EXECUTION_FLOW,
  FINANCIAL_PROHIBITIONS,
  FINANCIAL_RULES,
  FOURTEEN_STEP_CHECKLIST,
  STATUTE_REQUIREMENTS,
  TRANSPARENCY_PILLARS,
  type ReadingMode,
} from '../data/oscData';

interface GuideSectionProps {
  mode: ReadingMode;
  onOpenTemplate: (docId: string) => void;
}

type GuideTab = 'trilha' | 'financeiro' | 'transparencia';

export function GuideSection({ mode, onOpenTemplate }: GuideSectionProps) {
  const [activeTab, setActiveTab] = useState<GuideTab>('trilha');
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [selectedStatuteId, setSelectedStatuteId] = useState<string>(STATUTE_REQUIREMENTS[0].id);
  const [checklistExpanded, setChecklistExpanded] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  const currentStep =
    CONSTITUTION_STEPS.find((s) => s.step === selectedStep) ?? CONSTITUTION_STEPS[0];
  const currentStatute =
    STATUTE_REQUIREMENTS.find((s) => s.id === selectedStatuteId) ?? STATUTE_REQUIREMENTS[0];

  const completedCount = Object.values(checkedSteps).filter(Boolean).length;

  const toggleStep = (index: number) => {
    setCheckedSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="trilha" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold text-indigo-700 mb-2">
              01. Guia Prático da OSC · Constituição, Finanças e Transparência
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Da criação no cartório à prestação de contas segura.
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              {mode === 'plain'
                ? 'A regularidade não é burocracia: é a ponte entre uma boa causa e os recursos que a tornam possível.'
                : 'Procedimentos constitutivos (CC, arts. 45, 54 e 59), execução financeira vinculada e controle horizontal e vertical no MROSC.'}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Seções do Guia da OSC"
            className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'trilha'}
              onClick={() => setActiveTab('trilha')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'trilha'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Trilha de Criação
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'financeiro'}
              onClick={() => setActiveTab('financeiro')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'financeiro'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gestão Financeira
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'transparencia'}
              onClick={() => setActiveTab('transparencia')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'transparencia'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Transparência
            </button>
          </div>
        </div>

        {/* TAB 1: TRILHA DE CRIAÇÃO */}
        {activeTab === 'trilha' && (
          <div className="space-y-10">
            {/* Interactive 6-Step Selector Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {CONSTITUTION_STEPS.map((step) => {
                const isSelected = step.step === selectedStep;
                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setSelectedStep(step.step)}
                    className={`p-3.5 rounded-xl border text-left transition-colors duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50'
                    }`}
                  >
                    <span
                      className={`block font-mono text-xs font-semibold tabular-nums mb-1 ${
                        isSelected ? 'text-indigo-200' : 'text-indigo-600'
                      }`}
                    >
                      Passo {step.number}
                    </span>
                    <span className="text-xs font-bold leading-snug block">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Detail Card (guiaosc.ai.studio signature 2-col layout) */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <p className="text-xs font-mono font-semibold text-indigo-700 mb-1">
                    Etapa {currentStep.number} de 06 · {currentStep.legalBasis}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{currentStep.plainSummary}</p>
                </div>

                {currentStep.step === 2 && (
                  <button
                    type="button"
                    onClick={() => onOpenTemplate('modelo-estatuto')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
                  >
                    <span>Baixar Modelo de Estatuto</span>
                  </button>
                )}
                {currentStep.step === 3 && (
                  <button
                    type="button"
                    onClick={() => onOpenTemplate('modelo-ata')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
                  >
                    <span>Baixar Modelo de Ata</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold mb-2">
                      <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>O que você precisa saber</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {currentStep.plainDetails}
                    </p>
                  </div>

                  <div className="bg-emerald-50/80 p-5 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold mb-2">
                      <Lightbulb className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Dica Prática</span>
                    </div>
                    <p className="text-sm text-emerald-950 leading-relaxed font-medium">
                      {currentStep.practicalTip}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 text-slate-800 text-xs font-bold mb-2">
                      <Scale className="w-4 h-4 text-indigo-600 shrink-0" aria-hidden="true" />
                      <span>Fundamentação Legal</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {currentStep.legalDetails}
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Base normativa:</span>
                      <span className="font-mono font-semibold text-slate-700">
                        {currentStep.legalBasis}
                      </span>
                    </div>
                  </div>

                  {currentStep.alertTitle && currentStep.alertText && (
                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-amber-800">
                        <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>{currentStep.alertTitle}</span>
                      </div>
                      <p className="leading-relaxed">{currentStep.alertText}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Interactive Art. 54 CC & MROSC Statute Requirements Explorer */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-xs font-mono font-semibold text-rose-700 mb-1">
                  Art. 54 do Código Civil · Art. 33 da Lei nº 13.019/2014
                </p>
                <h3 className="font-display text-xl font-bold text-slate-950">
                  O que o Estatuto Social precisa conter obrigatoriamente
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Clique em cada requisito para entender a exigência e ver um exemplo de redação.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-2">
                  {STATUTE_REQUIREMENTS.map((req) => {
                    const isSelected = req.id === currentStatute.id;
                    return (
                      <button
                        key={req.id}
                        type="button"
                        onClick={() => setSelectedStatuteId(req.id)}
                        className={`w-full p-3.5 rounded-xl text-left border transition-colors duration-150 flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-400 text-indigo-950 font-semibold'
                            : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 tabular-nums ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {req.number}
                        </span>
                        <span className="text-xs sm:text-sm leading-snug">{req.item}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between gap-5">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 text-xs">
                      <span className="font-mono font-semibold text-indigo-700">
                        {currentStatute.legalBasis}
                      </span>
                      <span className="font-semibold text-emerald-700">
                        Cláusula obrigatória
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-bold text-slate-950 mb-1.5">
                        {currentStatute.item}
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {mode === 'plain'
                          ? currentStatute.explanationPlain
                          : currentStatute.explanationLegal}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-mono font-semibold text-slate-500 mb-1.5">
                      Exemplo prático de redação no Estatuto
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                      “{currentStatute.example}”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable 14-Step Official Checklist */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-indigo-700 font-semibold mb-1 tabular-nums">
                    Checklist Oficial · {completedCount} de 14 etapas marcadas
                  </p>
                  <h3 className="font-display text-xl font-bold text-slate-950">
                    Roteiro completo em 14 etapas para formalizar sua OSC
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setChecklistExpanded((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:border-indigo-400 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  <span>{checklistExpanded ? 'Ocultar lista' : 'Abrir checklist'}</span>
                  {checklistExpanded ? (
                    <ChevronUp className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>
              </div>

              {checklistExpanded && (
                <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {FOURTEEN_STEP_CHECKLIST.map((item, idx) => {
                    const checked = Boolean(checkedSteps[idx]);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleStep(idx)}
                        className="text-left flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 transition-colors cursor-pointer"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-colors ${
                            checked
                              ? 'bg-indigo-600 border-indigo-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5" />}
                        </span>
                        <span className="text-sm leading-snug text-slate-800">
                          <span className="font-mono text-xs text-indigo-600 font-semibold mr-2 tabular-nums">
                            {String(idx + 1).padStart(2, '0')}.
                          </span>
                          <span className={checked ? 'line-through text-slate-400' : ''}>
                            {item}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: GESTÃO FINANCEIRA & VEDAÇÕES */}
        {activeTab === 'financeiro' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FINANCIAL_RULES.map((rule) => (
                <article
                  key={rule.number}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono mb-2">
                      <span className="font-semibold text-indigo-700 tabular-nums">
                        Regra {rule.number}
                      </span>
                      <span className="text-slate-500">{rule.legalBasis}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-950 mb-2">
                      {rule.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {mode === 'plain' ? rule.plain : rule.legal}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-amber-900 bg-amber-50 border border-amber-200/80 rounded-lg p-3 leading-relaxed">
                    <span className="font-bold text-amber-800">Atenção: </span>
                    {rule.warning}
                  </p>
                </article>
              ))}
            </div>

            {/* Express Prohibitions */}
            <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-rose-800 text-xs font-mono font-semibold mb-1.5">
                <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                <span>Vedações Expressas · Arts. 45 a 53 do MROSC</span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-950 mb-5">
                O que é estritamente proibido na execução financeira
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FINANCIAL_PROHIBITIONS.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-rose-200/80 rounded-xl p-4"
                  >
                    <p className="text-xs font-mono text-rose-700 font-semibold mb-1">
                      {item.severity} · {item.article}
                    </p>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 9-Step Execution Flow */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
                Passo a passo da execução financeira (9 marcos)
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Da celebração do plano de trabalho até a devolução de eventual saldo remanescente.
              </p>
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {FINANCIAL_EXECUTION_FLOW.map((step, index) => (
                  <li
                    key={step}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="block font-mono text-xs font-semibold text-indigo-700 mb-1.5 tabular-nums">
                      Passo {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-slate-800 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* TAB 3: TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS */}
        {activeTab === 'transparencia' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TRANSPARENCY_PILLARS.map((pillar, idx) => (
                <article
                  key={pillar.title}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
                >
                  <p className="text-xs font-mono font-semibold text-indigo-700 mb-2 tabular-nums">
                    0{idx + 1} · {pillar.subtitle}
                  </p>
                  <h3 className="font-display text-lg font-bold text-slate-950 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="bg-indigo-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-mono text-indigo-300 mb-1.5">
                  Transparência Ativa · CF/88 art. 37 · MROSC arts. 11 e 34
                </p>
                <h3 className="font-display text-xl font-bold mb-2">
                  Pasta permanente para estar pronta a qualquer edital
                </h3>
                <p className="text-sm text-indigo-100/90 leading-relaxed">
                  Estatuto Social registrado · CNPJ ativo · Atas de eleição da diretoria · Certidões negativas (Federal, Estadual, Municipal, FGTS e Trabalhista) · Balanços contábeis (NBC) · Relatórios anuais de atividades.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenTemplate('checklist-constituicao')}
                className="px-5 py-3 text-sm font-semibold text-indigo-950 bg-white hover:bg-indigo-50 rounded-xl transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
              >
                Baixar Checklist Completo
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
