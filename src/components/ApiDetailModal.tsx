'use client';

import React, { useState, useEffect } from 'react';
import { ApiEntry } from '@/data/types';
import {
  getDifficultyColor,
  getPricingColor,
  getAuthLabel,
  getPricingLabel,
  copyToClipboard,
} from '@/lib/utils';
import {
  X,
  ExternalLink,
  Heart,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Key,
  Code2,
  FileJson,
  Check,
  Copy,
  Globe,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface ApiDetailModalProps {
  api: ApiEntry | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ApiDetailModal({
  api,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
}: ApiDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'translator' | 'code' | 'response'>('translator');
  const [codeType, setCodeType] = useState<'curl' | 'fetch'>('curl');
  const [isCopied, setIsCopied] = useState(false);
  const [isJsonCopied, setIsJsonCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !api) return null;

  // Generate code snippet
  const generateSnippet = () => {
    if (codeType === 'curl') {
      let cmd = `curl -X ${api.sampleRequest.method} "${api.sampleRequest.url}"`;
      if (api.sampleRequest.headers) {
        Object.entries(api.sampleRequest.headers).forEach(([k, v]) => {
          cmd += ` \\\n  -H "${k}: ${v}"`;
        });
      }
      if (api.sampleRequest.body) {
        cmd += ` \\\n  -d '${api.sampleRequest.body}'`;
      }
      return cmd;
    } else {
      let code = `fetch("${api.sampleRequest.url}", {\n  method: "${api.sampleRequest.method}",\n`;
      if (api.sampleRequest.headers) {
        code += `  headers: ${JSON.stringify(api.sampleRequest.headers, null, 4).replace(/\n/g, '\n  ')},\n`;
      }
      if (api.sampleRequest.body) {
        code += `  body: JSON.stringify(${api.sampleRequest.body}),\n`;
      }
      code += `})\n  .then(res => res.json())\n  .then(data => console.log(data));`;
      return code;
    }
  };

  const handleCopyCode = async () => {
    await copyToClipboard(generateSnippet());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCopyResponse = async () => {
    await copyToClipboard(JSON.stringify(api.sampleResponse.body, null, 2));
    setIsJsonCopied(true);
    setTimeout(() => setIsJsonCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Content */}
      <div className="relative flex flex-col w-full max-w-3xl max-h-[90vh] rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden z-10 transition-all">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-zinc-200/80 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-semibold capitalize text-zinc-700 dark:text-zinc-300">
                <Layers className="h-3 w-3 text-blue-500" />
                {api.category}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${getDifficultyColor(
                  api.difficulty
                )}`}
              >
                {api.difficulty}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${getPricingColor(
                  api.pricing
                )}`}
              >
                {getPricingLabel(api.pricing)}
              </span>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                Auth: {getAuthLabel(api.auth)}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
              {api.name}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              {api.longDescription || api.description}
            </p>
          </div>

          <div className="flex items-center gap-1.5 ml-4 shrink-0">
            {/* Bookmark button */}
            <button
              onClick={() => onToggleFavorite(api.id)}
              className="p-2 rounded-xl text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors border border-zinc-200 dark:border-zinc-800"
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart
                className={`h-4 w-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`}
              />
            </button>

            {/* Docs link */}
            <a
              href={api.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors border border-zinc-200 dark:border-zinc-800"
              title="Open official documentation"
            >
              <ExternalLink className="h-4 w-4" />
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800"
              title="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-900/30">
          <button
            onClick={() => setActiveTab('translator')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'translator'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30 rounded-t-lg'
                : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span>API Translator</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'code'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30 rounded-t-lg'
                : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <Code2 className="h-4 w-4" />
            <span>Code Snippet</span>
          </button>

          <button
            onClick={() => setActiveTab('response')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'response'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30 rounded-t-lg'
                : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <FileJson className="h-4 w-4" />
            <span>Sample Response</span>
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          {/* TAB 1: API TRANSLATOR */}
          {activeTab === 'translator' && (
            <div className="space-y-5">
              {/* 🎯 What It Does */}
              <div className="rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 p-4">
                <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-300 mb-1.5">
                  <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  What It Actually Does (In Plain English)
                </h4>
                <p className="text-xs sm:text-sm text-blue-950/80 dark:text-blue-200/90 leading-relaxed font-medium">
                  {api.apiTranslator.whatItDoes}
                </p>
              </div>

              {/* 📦 Data Returned */}
              <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800 p-4">
                <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white mb-1.5">
                  <FileJson className="h-4 w-4 text-cyan-500" />
                  What Data You Receive
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {api.apiTranslator.dataReturned}
                </p>
              </div>

              {/* 💡 Build With Ideas */}
              <div className="rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 p-4">
                <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-300 mb-2">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  Cool Project Ideas You Can Build With This
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950/90 dark:text-amber-200/90">
                  {api.apiTranslator.buildWith.map((idea, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ⚠️ When NOT to Use */}
              <div className="rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 p-4">
                <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-300 mb-1.5">
                  <AlertTriangle className="h-4 w-4 text-rose-500" />
                  When NOT to Use It
                </h4>
                <p className="text-xs sm:text-sm text-rose-950/80 dark:text-rose-200/90 leading-relaxed">
                  {api.apiTranslator.whenNotToUse}
                </p>
              </div>

              {/* 🔑 Auth Explained & Scenarios */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800 p-4">
                  <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white mb-1.5">
                    <Key className="h-4 w-4 text-purple-500" />
                    How Authentication Works
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {api.apiTranslator.authExplained}
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800 p-4">
                  <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white mb-1.5">
                    <Globe className="h-4 w-4 text-emerald-500" />
                    Real-World User Scenario
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    {api.apiTranslator.scenarios.map((sc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">→</span>
                        <span>{sc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CODE SNIPPET */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCodeType('curl')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      codeType === 'curl'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    cURL
                  </button>
                  <button
                    onClick={() => setCodeType('fetch')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      codeType === 'fetch'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    JavaScript (fetch)
                  </button>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Endpoint URL Bar */}
              <div className="flex items-center gap-2 rounded-xl bg-zinc-900 text-white p-3 font-mono text-xs overflow-x-auto">
                <span className="px-2 py-0.5 rounded bg-blue-600 font-bold uppercase">
                  {api.sampleRequest.method}
                </span>
                <span className="text-zinc-300 break-all">{api.sampleRequest.url}</span>
              </div>

              {/* Code Snippet Box */}
              <div className="relative rounded-2xl bg-zinc-950 p-4 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto">
                <pre>{generateSnippet()}</pre>
              </div>
            </div>
          )}

          {/* TAB 3: SAMPLE RESPONSE */}
          {activeTab === 'response' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-bold border border-emerald-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    HTTP Status {api.sampleResponse.status} OK
                  </span>
                </div>

                <button
                  onClick={handleCopyResponse}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
                >
                  {isJsonCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy JSON</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-2xl bg-zinc-950 p-4 border border-zinc-800 font-mono text-xs text-emerald-400 overflow-x-auto max-h-96">
                <pre>{JSON.stringify(api.sampleResponse.body, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 font-mono text-[11px]">ESC</kbd> to close
          </span>
          <button
            onClick={onClose}
            className="rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
