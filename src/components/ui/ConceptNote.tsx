import { Info } from 'lucide-react'
import type { ReactNode } from 'react'

/** Small, honest footnote for concept-stage statements (prices, illustrations, timelines). */
export function ConceptNote({ children, dark = false, className = '' }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={`flex items-start gap-2 text-[13px] leading-relaxed ${dark ? 'text-white/60' : 'text-muted'} ${className}`}>
      <Info aria-hidden className="mt-0.5 size-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  )
}
