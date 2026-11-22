import { useMemo, useState } from 'react';
import { Download, Eye, FileText, X } from 'lucide-react';
import {
  DOCUMENT_TEMPLATES,
  downloadDocumentAsText,
  downloadDocumentAsWord,
  type DocumentTemplate,
} from '../data/documentTemplates';
import { ORIGINAL_PDF_URL } from '../data/oscData';

interface DocumentsSectionProps {
  previewTemplateId: string | null;
  onSelectPreview: (docId: string | null) => void;
  onOpenPdfModal: () => void;
}

type DocCategory = 'Todos' | DocumentTemplate['category'];

const DOC_CATEGORIES: DocCategory[] = [
  'Todos',
  'Modelo Editável',
  'Orientação Jurídica',
  'Checklist Prático',
];

export function DocumentsSection({
  previewTemplateId,
  onSelectPreview,
  onOpenPdfModal,
}: DocumentsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<DocCategory>('Todos');
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const filteredDocs = useMemo(() => {
    if (selectedCategory === 'Todos') return DOCUMENT_TEMPLATES;
    return DOCUMENT_TEMPLATES.filter((doc) => doc.category === selectedCategory);
  }, [selectedCategory]);

  const previewDoc = useMemo(() => {
    if (!previewTemplateId) return null;
    return DOCUMENT_TEMPLATES.find((doc) => doc.id === previewTemplateId) ?? null;
  }, [previewTemplateId]);

  const handleDownloadWord = (doc: DocumentTemplate) => {
    downloadDocumentAsWord(
      doc.title,
      `${doc.category} · ${doc.legalRef}`,
      doc.content,
      doc.fileBaseName
    );
    setDownloadedId(doc.id);
    window.setTimeout(() => {
      setDownloadedId((prev) => (prev === doc.id ? null : prev));
    }, 2500);
  };

  const handleDownloadTxt = (doc: DocumentTemplate) => {
    downloadDocumentAsText(
      doc.title,
      `${doc.category} · ${doc.legalRef}`,
      doc.content,
      doc.fileBaseName
    );
    setDownloadedId(doc.id);
    window.setTimeout(() => {
      setDownloadedId((prev) => (prev === doc.id ? null : prev));
    }, 2500);
  };

  return (
    <section id="documentos" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold text-indigo-700 mb-2">
              05. Modelos de Documentos e Orientações Jurídicas
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Baixe minutas prontas para adaptar à realidade da sua OSC.
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Leia o conteúdo completo antes de baixar ou faça o download imediato em formato editável (.doc para Word e Google Docs) ou texto simples (.txt).
            </p>
          </div>

          <div
            role="group"
            aria-label="Filtrar documentos por tipo"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl self-start lg:self-auto"
          >
            {DOC_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Document grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <article
              key={doc.id}
              className="border border-slate-200 rounded-2xl p-6 flex flex-col justify-between bg-slate-50/40 hover:border-indigo-300 transition-colors"
            >
              <div>
                <p className="text-xs font-mono text-slate-500 mb-2.5">
                  <span className="text-indigo-700 font-semibold">{doc.category}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{doc.legalRef}</span>
                </p>

                <h3 className="font-display text-lg font-bold text-slate-950 mb-2 leading-snug">
                  {doc.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 mb-6">{doc.summary}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectPreview(doc.id)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-indigo-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  <span>Visualizar</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleDownloadWord(doc)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{downloadedId === doc.id ? 'Baixado' : 'Baixar .doc'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadTxt(doc)}
                    title="Baixar em texto simples (.txt)"
                    className="px-2.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-950 bg-white border border-slate-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    .txt
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Original Full Academic PDF Reference Box */}
        <div className="mt-10 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold text-indigo-300 mb-1.5">
              Artigo Científico Completo · 17 páginas · Direito UniSENAI PR
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
              Orientação e Apoio às Organizações da Sociedade Civil (OSC)
            </h3>
            <p className="text-sm leading-relaxed text-indigo-100/90">
              Leia o estudo completo diretamente nesta página (com referências ABNT copiáveis) ou faça o download do PDF original para consultar offline.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-indigo-950 bg-white hover:bg-indigo-50 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>Ler PDF e Referências</span>
            </button>
            <a
              href={ORIGINAL_PDF_URL}
              download="Guia-Completo-Orientacao-Apoio-OSC.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/40 rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Baixar PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="doc-preview-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4"
          onClick={() => onSelectPreview(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50">
              <div>
                <p className="text-xs font-mono font-semibold text-indigo-700 mb-1">
                  {previewDoc.category} · {previewDoc.legalRef}
                </p>
                <h3
                  id="doc-preview-title"
                  className="font-display text-xl sm:text-2xl font-bold text-slate-950"
                >
                  {previewDoc.title}
                </h3>
              </div>

              <button
                type="button"
                aria-label="Fechar visualização"
                onClick={() => onSelectPreview(null)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-white">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-800">
                {previewDoc.content}
              </pre>
            </div>

            <div className="px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-slate-50">
              <button
                type="button"
                onClick={() => onSelectPreview(null)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-950 cursor-pointer"
              >
                Fechar
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleDownloadTxt(previewDoc)}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-indigo-400 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Baixar .txt
                </button>
                <button
                  type="button"
                  onClick={() => handleDownloadWord(previewDoc)}
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Baixar editável (.doc)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
