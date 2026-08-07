"use client";

import { useState } from "react";
import Link from "next/link";
import {
  type ComplianceFramework,
  calculateComplianceScore,
} from "@/lib/data/compliance";
import { calculateComplianceScoreEn } from "@/lib/data/compliance.en";
import { localizeHref } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type Props = {
  framework: ComplianceFramework;
};

const copy = {
  it: {
    progress: (current: number, total: number) => `Domanda ${current} di ${total}`,
    yes: "Sì",
    no: "No",
    back: "← Indietro",
    next: "Avanti →",
    seeResults: "Vedi risultati →",
    levelLabels: {
      critico: "Livello critico",
      medio: "Livello medio",
      buono: "Livello buono",
      eccellente: "Livello eccellente",
    },
    resultTitle: (title: string) => `Risultato autovalutazione ${title}`,
    ctaContact: "Richiedi consulenza gratuita",
    ctaRestart: "Ripeti questionario",
  },
  en: {
    progress: (current: number, total: number) => `Question ${current} of ${total}`,
    yes: "Yes",
    no: "No",
    back: "← Back",
    next: "Next →",
    seeResults: "See results →",
    levelLabels: {
      critico: "Critical level",
      medio: "Moderate level",
      buono: "Good level",
      eccellente: "Excellent level",
    },
    resultTitle: (title: string) => `${title} self-assessment result`,
    ctaContact: "Request a free consultation",
    ctaRestart: "Retake the questionnaire",
  },
} as const;

export function ComplianceQuestionnaire({ framework }: Props) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const locale = useLocale();

  const t = copy[locale];

  const questions = framework.questions;
  const progress = Math.round(((currentStep + (showResults ? 1 : 0)) / questions.length) * 100);

  function selectAnswer(value: boolean) {
    setAnswers((prev) => ({ ...prev, [questions[currentStep].id]: value }));
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        setShowResults(true);
      }
    }, 200);
  }

  function handlePrev() {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }

  const calculate = locale === "en" ? calculateComplianceScoreEn : calculateComplianceScore;
  const result = showResults ? calculate(framework, answers) : null;

  const levelColors = {
    critico: "text-red-400 bg-red-500/10 border-red-500/30",
    medio: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    buono: "text-brand-400 bg-brand-500/10 border-brand-500/30",
    eccellente: "text-brand-300 bg-brand-600/10 border-brand-600/30",
  };

  return (
    <div>
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-xs text-zinc-500">
          <span>
            {t.progress(showResults ? questions.length : currentStep + 1, questions.length)}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-700 to-brand-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {!showResults ? (
        <div className="card p-6 sm:p-8">
          <h2 className="text-base font-medium leading-relaxed text-white sm:text-lg">
            {questions[currentStep].question}
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => selectAnswer(true)}
              className={`group flex items-center justify-center gap-3 rounded-xl border-2 px-6 py-5 text-base font-semibold transition-all duration-200 ${
                answers[questions[currentStep].id] === true
                  ? "border-brand-500 bg-brand-500/15 text-white shadow-lg shadow-brand-600/10"
                  : "border-zinc-700 text-zinc-200 hover:border-brand-600/50 hover:bg-brand-600/5"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/20 text-brand-400 transition-colors group-hover:bg-brand-600/30">
                ✓
              </span>
              {t.yes}
            </button>
            <button
              type="button"
              onClick={() => selectAnswer(false)}
              className={`group flex items-center justify-center gap-3 rounded-xl border-2 px-6 py-5 text-base font-semibold transition-all duration-200 ${
                answers[questions[currentStep].id] === false
                  ? "border-zinc-400 bg-zinc-800 text-white"
                  : "border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800/50"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700/50 text-zinc-400 transition-colors group-hover:bg-zinc-700">
                ✕
              </span>
              {t.no}
            </button>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="text-sm text-zinc-500 transition-colors hover:text-white disabled:opacity-30"
            >
              {t.back}
            </button>
            {answers[questions[currentStep].id] !== undefined && (
              <button
                type="button"
                onClick={() => {
                  if (currentStep < questions.length - 1) setCurrentStep((s) => s + 1);
                  else setShowResults(true);
                }}
                className="text-sm font-medium text-brand-500 hover:text-brand-400"
              >
                {currentStep === questions.length - 1 ? t.seeResults : t.next}
              </button>
            )}
          </div>
        </div>
      ) : (
        result && (
          <div className="card p-8 text-center">
            <div
              className={`mx-auto mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${levelColors[result.level]}`}
            >
              {t.levelLabels[result.level]}
            </div>
            <p className="text-5xl font-bold text-white">{result.score}%</p>
            <h2 className="mt-4 text-lg font-semibold text-white">
              {t.resultTitle(framework.title)}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400">{result.message}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={localizeHref(locale, "/contatti")} className="btn-primary">
                {t.ctaContact}
              </Link>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setCurrentStep(0);
                  setShowResults(false);
                }}
                className="btn-secondary"
              >
                {t.ctaRestart}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
