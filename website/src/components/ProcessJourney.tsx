"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronRight, ClipboardList, MessageCircle, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "contact",
    step: "1",
    title: "Contact Us",
    description: "Connect with our team via WhatsApp, phone call, or email.",
    icon: MessageCircle,
  },
  {
    id: "requirements",
    step: "2",
    title: "Discuss Requirements",
    description: "Specify the printer models, sizing, and quantity needed.",
    icon: ClipboardList,
  },
  {
    id: "quotation",
    step: "3",
    title: "Get Quotation",
    description: "Receive a clear bulk price quotation tailored to your clinic.",
    icon: BadgeCheck,
  },
  {
    id: "delivery",
    step: "4",
    title: "Receive Products",
    description: "Supplies are shipped out fast to ensure uninterrupted imaging.",
    icon: Truck,
  },
] as const;

export function ProcessJourney() {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const Icon = current.icon;

  return (
    <motion.div
      className="process-journey"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="process-journey__showcase" aria-live="polite">
        <div className="process-journey__showcase-glow" aria-hidden />
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="process-journey__showcase-inner"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="process-journey__showcase-icon">
              <Icon className="size-9" strokeWidth={1.75} />
            </div>
            <h3 className="process-journey__showcase-title">{current.title}</h3>
            <p className="process-journey__showcase-desc">{current.description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="process-journey__progress" aria-hidden>
          {steps.map((step, index) => (
            <span
              key={step.id}
              className={cn("process-journey__progress-dot", index <= active && "is-filled")}
            />
          ))}
        </div>
      </div>

      <ol className="process-journey__rail">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = index === active;
          const isComplete = index < active;

          return (
            <li key={step.id} className="process-journey__rail-item">
              <button
                type="button"
                className={cn(
                  "process-journey__item",
                  isActive && "is-active",
                  isComplete && "is-complete"
                )}
                onClick={() => setActive(index)}
                aria-current={isActive ? "step" : undefined}
              >
                <span className="process-journey__item-index">{step.step}</span>
                <span className="process-journey__item-icon">
                  <StepIcon className="size-5" strokeWidth={2} />
                </span>
                <span className="process-journey__item-copy">
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </span>
                <ChevronRight className="process-journey__item-arrow size-5 shrink-0" aria-hidden />
              </button>
            </li>
          );
        })}
      </ol>
    </motion.div>
  );
}
