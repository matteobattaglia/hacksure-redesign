"use client";

import { useState } from "react";
import Link from "next/link";
import {
  type ComplianceFramework,
  calculateComplianceScore,
} from "@/lib/data/compliance";

type Props = {
  framework: ComplianceFramework;
};

export function ComplianceQuestionnaire({ framework }: Props) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = framework.questions;
  const progress = Math.round(((currentStep + (showResults ? 1 : 0)) / questions.length) * 100);

  function toggleAnswer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleNext() {
    if (currentStep < questions.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setShowResults(true);
    }
  }

  function handlePrev() {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }

  const result = showResults ? calculateComplianceScore(framework, answers) : null;

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
            Domanda {showResults ? questions.length : currentStep + 1} di {questions.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-brand-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {!showResults ? (
        <div className="card p-6">
          <h2 className="text-base font-medium text-white">
            {questions[currentStep].question}
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => {
                toggleAnswer(questions[currentStep].id, true);
                setTimeout(handleNext, 150);
              }}
              className={`rounded-md border px-4 py-4 text-left text-sm transition-colors ${
                answers[questions[currentStep].id] === true
                  ? "border-brand-500 bg-brand-500/10 text-white"
                  : "border-zinc-700 text-zinc-300 hover:border-zinc-600"
              }`}
            >
              <span className="font-medium">Sì</span>
              <span className="mt-0.5 block text-xs text-zinc-500">Conforme / implementato</span>
            </button>
            <button
              type="button"
              onClick={() => {
                toggleAnswer(questions[currentStep].id, false);
                setTimeout(handleNext, 150);
              }}
              className={`rounded-md border px-4 py-4 text-left text-sm transition-colors ${
                answers[questions[currentStep].id] === false
                  ? "border-zinc-500 bg-zinc-800 text-white"
                  : "border-zinc-700 text-zinc-300 hover:border-zinc-600"
              }`}
            >
              <span className="font-medium">No</span>
              <span className="mt-0.5 block text-xs text-zinc-500">Non conforme / da implementare</span>
            </button>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="text-sm text-zinc-500 hover:text-white disabled:opacity-30"
            >
              Indietro
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={answers[questions[currentStep].id] === undefined}
              className="text-sm font-medium text-brand-500 hover:text-brand-400 disabled:opacity-40"
            >
              {currentStep === questions.length - 1 ? "Vedi risultati" : "Avanti"}
            </button>
          </div>
        </div>
      ) : (
        result && (
          <div className="card p-6 text-center">
            <div
              className={`mx-auto mb-4 inline-block rounded border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${levelColors[result.level]}`}
            >
              {result.level}
            </div>
            <p className="text-4xl font-semibold text-white">{result.score}%</p>
            <h2 className="mt-4 text-base font-medium text-white">
              Risultato autovalutazione {framework.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-400">{result.message}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contatti" className="btn-primary">
                Richiedi consulenza
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
                Ripeti questionario
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
