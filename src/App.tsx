/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useState } from 'react';
import { ArticlePdfModal } from './components/ArticlePdfModal';
import { DiagnosticSection } from './components/DiagnosticSection';
import { DocumentsSection } from './components/DocumentsSection';
import { EditaisSection } from './components/EditaisSection';
import { Footer } from './components/Footer';
import { GuideSection } from './components/GuideSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnershipsSection } from './components/PartnershipsSection';
import type { ReadingMode } from './data/oscData';

export default function App() {
  const [readingMode, setReadingMode] = useState<ReadingMode>('plain');
  const [previewTemplateId, setPreviewTemplateId] = useState<string | null>(null);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  const handleNavigate = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleOpenTemplate = useCallback((docId: string) => {
    setPreviewTemplateId(docId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-1">
        <Hero
          mode={readingMode}
          onChangeMode={setReadingMode}
          onNavigate={handleNavigate}
          onOpenPdfModal={() => setPdfModalOpen(true)}
        />
        <GuideSection mode={readingMode} onOpenTemplate={handleOpenTemplate} />
        <PartnershipsSection mode={readingMode} onOpenTemplate={handleOpenTemplate} />
        <EditaisSection onNavigate={handleNavigate} />
        <DiagnosticSection onOpenTemplate={handleOpenTemplate} />
        <DocumentsSection
          previewTemplateId={previewTemplateId}
          onSelectPreview={setPreviewTemplateId}
          onOpenPdfModal={() => setPdfModalOpen(true)}
        />
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenPdfModal={() => setPdfModalOpen(true)}
      />

      <ArticlePdfModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />
    </div>
  );
}
