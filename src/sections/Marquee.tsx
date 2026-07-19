import { GraduationCap } from 'lucide-react'
import { MARQUEE_ITEMS } from '@/data/content'

export function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="relative z-10 -rotate-1 overflow-hidden bg-[#CDE94F] py-4 shadow-[0_10px_40px_-15px_rgba(11,61,46,0.4)]" dir="ltr">
      <div className="animate-marquee flex w-max items-center gap-8 pl-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-black text-[#0B3D2E]">
            {t}
            <GraduationCap className="h-5 w-5 text-[#1E7A4B]" />
          </span>
        ))}
      </div>
    </div>
  )
}
