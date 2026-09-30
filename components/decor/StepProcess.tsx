interface Step {
  number: string;
  title: string;
  body: string;
  icon?: string;
}

interface StepProcessProps {
  steps: Step[];
  className?: string;
}

/**
 * Horizontal step process with connecting line. Used in the v2
 * "How I work" section.
 */
export function StepProcess({ steps, className }: StepProcessProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${steps.length} gap-6 md:gap-4 ${className ?? ""}`}>
      {steps.map((step, i) => (
        <div
          key={step.number}
          className="relative flex flex-col gap-3 rounded-[var(--radius-card)] glass p-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-bold text-violet">
              {step.number}
            </span>
            {step.icon ? (
              <span aria-hidden className="text-2xl text-lime">
                {step.icon}
              </span>
            ) : null}
          </div>
          <h3 className="font-display text-xl text-ink">{step.title}</h3>
          <p className="text-sm text-ink-2 leading-relaxed">{step.body}</p>
          {i < steps.length - 1 ? (
            <span
              aria-hidden
              className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-line"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}