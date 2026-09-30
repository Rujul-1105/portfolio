interface RuleProps {
  className?: string;
  vertical?: boolean;
}

/** Thin hairline that picks up the line color token. */
export function Rule({ className, vertical }: RuleProps) {
  if (vertical) {
    return (
      <div
        className={`w-px bg-line ${className ?? ""}`}
        role="presentation"
      />
    );
  }
  return <div className={`h-px w-full bg-line ${className ?? ""}`} role="presentation" />;
}