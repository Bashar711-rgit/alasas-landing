import { MessageCircle } from 'lucide-react'
import { BRAND, BRAND_EN, WA_LINK } from '@/data/content'
import { logo } from '@/assets/images'

export function Footer() {
  return (
    <footer className="border-t border-[#0B3D2E]/10 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white p-1 ring-1 ring-[#0B3D2E]/10">
            <img src={logo} alt={BRAND} className="h-full w-full object-contain" />
          </span>
          <div>
            <p className="font-display font-black text-[#0B3D2E]">{BRAND}</p>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#7CB342]">{BRAND_EN}</p>
          </div>
        </div>

        <p className="text-sm font-bold text-[#0B3D2E]/50">
          © 2026 {BRAND} — جميع الحقوق محفوظة
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#1E7A4B] transition hover:text-[#0B3D2E]"
        >
          <MessageCircle className="h-4 w-4" />
          تواصل معنا
        </a>
      </div>
    </footer>
  )
}
