"use client";

import React, { useState } from "react";
import { faqItems } from "@/config/faq";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="MERAK EDİLENLER"
          title="Sıkça Sorulan Sorular"
          subtitle="Süreç, revizyonlar, telif hakları ve faturalandırma ile ilgili en çok merak edilen detaylar."
        />

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="glass-panel rounded-2xl overflow-hidden transition-colors border border-neutral-800"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-in fade-in duration-200"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
