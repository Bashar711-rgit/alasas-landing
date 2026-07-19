import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { BRAND, WA_LINK } from '@/data/content'
import { logo } from '@/assets/images'

const LINKS = [
  { href: '#services', label: 'خدماتنا' },
  { href: '#why', label: 'لماذا نحن' },
  { href: '#contact', label: 'تواصل معنا' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 shadow-[0_8px_30px_-12px_rgba(11,61,46,0.25)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-md ring-1 ring-[#0B3D2E]/10">
            <img src={logo} alt={BRAND} className="h-full w-full object-contain" />
          </span>
          <span className="font-display text-xl font-black tracking-tight text-[#0B3D2E]">
            {BRAND}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[15px] font-bold text-[#0B3D2E]/75 transition hover:text-[#0B3D2E] after:absolute after:-bottom-1.5 after:right-0 after:h-[3px] after:w-0 after:rounded-full after:bg-[#CDE94F] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-[#0B3D2E] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#0B3D2E]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12573C] hover:shadow-xl"
        >
          <MessageCircle className="h-4 w-4 text-[#CDE94F] transition-transform duration-300 group-hover:rotate-12" />
          واتساب
        </a>
      </div>
    </header>
  )
}
