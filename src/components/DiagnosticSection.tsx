import { useMemo, useState } from 'react';
import { Download, FileText, RotateCcw } from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS } from '../data/oscData';
import {
  DOCUMENT_TEMPLATES,
  downloadDiagnosticReport,
  type AnswerValue,
} from '../data/documentTemplates';

interface DiagnosticSectionProps {
  onOpenTemplate: (docId: string) => void;
}

const ANSWER_OPTIONS: { value: AnswerValue; label: string }[] = [
  { value: 'sim', label: 'Sim, já temos' },
  { value: 'andamento', label: 'Em andamento' },
  { value: 'nao', label: 'Ainda não' },
];

export function DiagnosticSection({ onOpenTemplate }: DiagnosticSectionProps) {
  const [orgName, setOrgName] = useState('');
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [showReport, setShowReport] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = DIAGNOSTIC_QUESTIONS.length;
  const allAnswered = answeredCount === totalQuestions;

  const evaluation = useMemo(() => {
    let points = 0;
    DIAGNOSTIC_QUESTIONS.forEach((q) => {
      const val = answers[q.id];
      if (val === 'sim') points += 1;
      else if (val === 'andamento') points += 0.5;
    });

    const percent = Math.round((points / totalQuestions) * 100);

    let stageLabel = 'Fase Inicial de Constituição';
    let stageSummary =
      'Sua organização está estruturando os primeiros passos legais. Priorize o estatuto com cláusulas do MROSC, a assembleia de constituição e o registro em cartório.';

    if (percent >= 80) {
      stageLabel = 'Alinhada para Parcerias e Editais';
      stageSummary =
        'Sua organização apresenta forte conformidade com o Código Civil e o MROSC. Mantenha as certidões atualizadas e prepare seu plano de trabalho para os chamamentos públicos.';
    } else if (percent >= 45) {
      stageLabel = 'Em Processo de Regularização';
      stageSummary =
        'Você já percorreu uma parte importante do caminho. Concluir as pendências abaixo garantirá segurança jurídica para abrir conta exclusiva e captar recursos públicos ou privados.';
    }

    const pendingItems = DIAGNOSTIC_QUESTIONS.filter((q) => answers[q.id] !== 'sim');

    return { percent, stageLabel, stageSummary, pendingItems };
  }, [answers, totalQuestions]);

  const handleSelectAnswer = (questionId: string, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleReset = () => {
    setAnswers({});
    setShowReport(false);
    setOrgName('');
  };

  const getDocTitle = (docId: string) => {
    return DOCUMENT_TEMPLATES.find((d) => d.id === docId)?.title ?? 'Ver documento recomendado';
  };

  return (
    <section id="diagnostico" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold text-indigo-700 mb-2">
              04. Diagnóstico de Adequação Legal
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Sua organização está alinhada com a lei para atuar e captar recursos?
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Responda às 10 perguntas abaixo — baseadas no Código Civil e na Lei nº 13.019/2014 (MROSC) — e receba um plano claro com suas pendências prioritárias e os modelos exatos para baixar.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start lg:self-auto">
            <div className="text-left lg:text-right">
              <p className="font-mono text-xs text-slate-500">Progresso</p>
              <p className="font-mono text-lg font-bold text-indigo-700 tabular-nums">
                {answeredCount}/{totalQuestions} respondidas
              </p>
            </div>
            {answeredCount > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-950 bg-white border border-slate-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Recomeçar</span>
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-indigo-600 transition-all duration-200"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Optional organization name */}
        <div className="mb-8 max-w-md">
          <label
            htmlFor="osc-name-input"
            className="block text-xs font-mono font-semibold text-slate-600 mb-2"
          >
            Nome da organização ou projeto (opcional — aparece no relatório)
          </label>
          <input
            id="osc-name-input"
            type="text"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            placeholder="Ex.: Associação Esportiva Esperança"
            className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none"
          />
        </div>

        {/* 10 Questions List */}
        <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-200 overflow-hidden shadow-xs">
          {DIAGNOSTIC_QUESTIONS.map((q) => {
            const selected = answers[q.id];
            return (
              <div
                key={q.id}
                className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5"
              >
                <div className="max-w-2xl">
                  <p className="text-xs font-mono text-slate-500 mb-1 tabular-nums">
                    <span className="text-indigo-700 font-semibold">{q.number}</span> · {q.pillar} ·{' '}
                    {q.legalBasis}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                    {q.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{q.explanation}</p>
                </div>

                <div
                  role="radiogroup"
                  aria-label={`Resposta para pergunta ${q.number}`}
                  className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0"
                >
                  {ANSWER_OPTIONS.map((opt) => {
                    const isSelected = selected === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => handleSelectAnswer(q.id, opt.value)}
                        className={`px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Generate Result Action */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            {allAnswered
              ? 'Todas as 10 perguntas respondidas. Gere seu diagnóstico agora.'
              : `Faltam ${totalQuestions - answeredCount} perguntas para o resultado completo (ou gere uma prévia agora).`}
          </p>

          <button
            type="button"
            disabled={answeredCount === 0}
            onClick={() => setShowReport(true)}
            className={`px-6 py-3 text-sm font-semibold rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 ${
              answeredCount === 0
                ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm cursor-pointer'
            }`}
          >
            {showReport ? 'Atualizar resultado abaixo' : 'Ver resultado do diagnóstico'}
          </button>
        </div>

        {/* Diagnostic Result Panel */}
        {showReport && answeredCount > 0 && (
          <div className="mt-10 bg-white border border-indigo-300 rounded-2xl p-6 md:p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-200">
              <div className="max-w-2xl">
                <p className="text-xs font-mono font-semibold text-indigo-700 mb-1.5">
                  Resultado do Diagnóstico{orgName.trim() ? ` · ${orgName.trim()}` : ''}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
                  {evaluation.stageLabel}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {evaluation.stageSummary}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-4 shrink-0">
                <div className="md:text-right">
                  <p className="text-xs font-mono text-slate-500">Adequação estimada</p>
                  <p className="font-mono text-4xl font-bold text-indigo-700 tabular-nums">
                    {evaluation.percent}%
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    downloadDiagnosticReport(
                      orgName,
                      answers,
                      DIAGNOSTIC_QUESTIONS,
                      evaluation.percent,
                      evaluation.stageLabel
                    )
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Baixar relatório (.doc)</span>
                </button>
              </div>
            </div>

            {evaluation.pendingItems.length === 0 ? (
              <div className="pt-7">
                <p className="text-base font-bold text-emerald-800 mb-1">
                  Excelente: nenhuma pendência básica identificada.
                </p>
                <p className="text-sm text-slate-600">
                  Mantenha sua pasta de certidões negativas atualizada mensalmente e acompanhe os chamamentos públicos na seção Editais.
                </p>
              </div>
            ) : (
              <div className="pt-7">
                <h4 className="font-display text-lg font-bold text-slate-950 mb-4">
                  Plano de ação prioritário ({evaluation.pendingItems.length}{' '}
                  {evaluation.pendingItems.length === 1 ? 'ponto' : 'pontos'})
                </h4>
                <div className="divide-y divide-slate-200">
                  {evaluation.pendingItems.map((item) => {
                    const statusText =
                      answers[item.id] === 'andamento'
                        ? 'Em andamento'
                        : answers[item.id] === 'nao'
                          ? 'Pendente'
                          : 'Não respondido';

                    return (
                      <div
                        key={item.id}
                        className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="max-w-2xl">
                          <p className="text-xs font-mono text-slate-500 mb-1">
                            Etapa {item.number} · Situação:{' '}
                            <span className="font-semibold text-amber-800">{statusText}</span> ·{' '}
                            {item.legalBasis}
                          </p>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.recommendation}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onOpenTemplate(item.recommendedDocId)}
                          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{getDocTitle(item.recommendedDocId)}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
