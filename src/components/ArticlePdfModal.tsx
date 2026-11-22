import { useState } from 'react';
import { Check, Copy, Download, FileText, X } from 'lucide-react';
import {
  ABNT_REFERENCES,
  ARTICLE_ADVISOR,
  ARTICLE_AUTHORS,
  ORIGINAL_PDF_URL,
} from '../data/oscData';

interface ArticlePdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalTab = 'resumo' | 'pdf' | 'referencias';

export function ArticlePdfModal({ isOpen, onClose }: ArticlePdfModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>('pdf');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyReferences = () => {
    navigator.clipboard.writeText(ABNT_REFERENCES.join('\n\n'));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl max-w-5xl w-full h-[88vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50">
          <div>
            <p className="text-xs font-mono font-semibold text-indigo-700 mb-1">
              Artigo Científico Base · Curso de Direito UniSENAI PR
            </p>
            <h3
              id="article-modal-title"
              className="font-display text-lg sm:text-xl font-bold text-slate-950 leading-snug"
            >
              Orientação e Apoio às Organizações da Sociedade Civil (OSC)
            </h3>
          </div>

          <button
            type="button"
            aria-label="Fechar artigo"
            onClick={onClose}
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 py-3 border-b border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label="Abas do artigo original"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'pdf'}
              onClick={() => setActiveTab('pdf')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'pdf'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Visualizar PDF
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'resumo'}
              onClick={() => setActiveTab('resumo')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'resumo'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Resumo e Autores
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'referencias'}
              onClick={() => setActiveTab('referencias')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'referencias'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Referências (ABNT)
            </button>
          </div>

          <a
            href={ORIGINAL_PDF_URL}
            download="Orientacao-e-Apoio-as-OSC-UniSENAI-PR.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Baixar PDF</span>
          </a>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {activeTab === 'pdf' && (
            <div className="w-full h-full min-h-[55vh] bg-white rounded-xl overflow-hidden border border-slate-300">
              <iframe
                src={ORIGINAL_PDF_URL}
                title="PDF do Artigo sobre Organizações da Sociedade Civil"
                className="w-full h-full min-h-[55vh]"
              />
            </div>
          )}

          {activeTab === 'resumo' && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 max-w-3xl">
              <div>
                <p className="text-xs font-mono font-semibold text-indigo-700 mb-1.5">Resumo</p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Este artigo apresenta orientações sobre a criação, formalização, regularização e gestão das Organizações da Sociedade Civil (OSC), abordando também as possibilidades de captação de recursos públicos e privados. São destacados os procedimentos legais, as parcerias com o Poder Público, os mecanismos de financiamento e a administração dos recursos, ressaltando a importância da transparência, da regularidade documental e da prestação de contas.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-mono font-semibold text-slate-500 mb-1.5">
                  Autores e Orientação
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {ARTICLE_AUTHORS.join(' · ')}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Orientador: {ARTICLE_ADVISOR} — Curso de Direito, UNISENAI PR
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-mono font-semibold text-slate-500 mb-1.5">
                  Palavras-chave
                </p>
                <p className="text-sm text-slate-700">
                  Organizações da Sociedade Civil · Regularização · Captação de recursos · Prestação de contas
                </p>
              </div>
            </div>
          )}

          {activeTab === 'referencias' && (
            <div className="space-y-4 max-w-4xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-600">
                  Legislações, portais e doutrina citados no estudo original:
                </span>
                <button
                  type="button"
                  onClick={handleCopyReferences}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-200 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copiar Referências (ABNT)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                {ABNT_REFERENCES.map((ref, idx) => (
                  <div
                    key={ref}
                    className="text-xs text-slate-700 pb-3 border-b border-slate-100 last:border-0 last:pb-0 leading-relaxed font-mono"
                  >
                    <span className="text-indigo-700 font-bold mr-2 tabular-nums">
                      [{idx + 1}]
                    </span>
                    {ref}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FileText className="w-4 h-4 text-indigo-600" aria-hidden="true" />
            <span>Estudo em Direito · UniSENAI PR</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
