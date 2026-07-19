import { useEffect, useRef, useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { MessageCircle, ScanLine, Sparkles, ArrowDown, BadgeCheck } from 'lucide-react'
import { WA_LINK } from '@/data/content'
import { wordmark } from '@/assets/images'
import { logo } from '@/assets/images'
import { qr } from '@/assets/images'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref} className="font-display text-3xl font-black text-[#0B3D2E] sm:text-4xl">
      {val}
      <span className="text-[#7CB342]">{suffix}</span>
    </span>
  )
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const CHIPS = [
  { text: 'أبحاث تخرج', className: 'top-6 -right-4 sm:-right-8', delay: '0s' },
  { text: 'سيرة ذاتية ATS', className: 'top-1/3 -left-4 sm:-left-8', delay: '1.2s' },
  { text: 'عروض احترافية', className: 'bottom-24 -right-3 sm:-right-6', delay: '2.1s' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* خلفية */}
      <div className="bg-grid-fade absolute inset-0" aria-hidden />
      <div
        className="animate-blob absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-[#CDE94F]/35 blur-3xl"
        aria-hidden
      />
      <div
        className="animate-blob absolute -bottom-40 right-[4%] h-[380px] w-[380px] rounded-full bg-[#1E7A4B]/20 blur-3xl [animation-delay:2.5s]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* النص */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-right">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0B3D2E]/10 bg-white/80 px-4 py-2 text-sm font-bold text-[#12573C] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#7CB342]" />
            منصة تعليمية متكاملة للطلاب
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-balance text-4xl font-black leading-[1.25] text-[#0B3D2E] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.2]"
          >
            كل ما يحتاجه الطالب…
            <span className="relative mx-2 inline-block whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-l from-[#1E7A4B] to-[#7CB342] bg-clip-text text-transparent">
                في منصة واحدة
              </span>
              <svg
                className="absolute -bottom-2 right-0 z-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <path d="M3 9C60 3 140 3 197 9" stroke="#CDE94F" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[#0B3D2E]/65 lg:mx-0"
          >
            لدينا فريق عمل متكامل لمنصة تعليمية متميزة — من الأبحاث والعروض والسيرة
            الذاتية حتى متابعة الترم كاملًا، بجودة عالية وسرية تامة وإنجاز وفق الوقت
            المحدد.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-[#0B3D2E] px-7 py-4 text-base font-bold text-white shadow-xl shadow-[#0B3D2E]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#12573C] hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5 text-[#CDE94F] transition-transform duration-300 group-hover:-rotate-12" />
              تواصل عبر واتساب
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#0B3D2E]/15 bg-white/70 px-7 py-[14px] text-base font-bold text-[#0B3D2E] backdrop-blur transition-all duration-300 hover:border-[#7CB342] hover:bg-white"
            >
              استعرض الخدمات
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          {/* إحصاءات */}
          <motion.dl variants={item} className="mt-12 grid max-w-lg grid-cols-3 gap-6 lg:mx-0 lg:max-w-none">
            {[
              { to: 8, suffix: '+', label: 'خدمات رئيسية' },
              { to: 100, suffix: '٪', label: 'سرية تامة' },
              { to: 100, suffix: '٪', label: 'التزام بالموعد' },
            ].map((s) => (
              <div key={s.label} className="border-r-2 border-[#CDE94F] pr-4 text-right">
                <dt className="order-2 mt-1 block text-sm font-bold text-[#0B3D2E]/55">{s.label}</dt>
                <dd>
                  <Counter to={s.to} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* بطاقة الهوية */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* شرائح عائمة */}
          {CHIPS.map((c) => (
            <span
              key={c.text}
              style={{ animationDelay: c.delay }}
              className={`animate-float absolute z-20 inline-flex items-center gap-1.5 rounded-full bg-[#0B3D2E] px-4 py-2 text-xs font-bold text-white shadow-lg ${c.className}`}
            >
              <BadgeCheck className="h-3.5 w-3.5 text-[#CDE94F]" />
              {c.text}
            </span>
          ))}

          <div className="group-sheen relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_40px_80px_-30px_rgba(11,61,46,0.35)] ring-1 ring-[#0B3D2E]/5 sm:p-10">
            <span className="sheen-bar pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-l from-transparent via-[#CDE94F]/25 to-transparent" aria-hidden />
            <div className="absolute inset-x-10 top-0 h-1.5 rounded-b-full bg-gradient-to-l from-[#1E7A4B] to-[#CDE94F]" aria-hidden />

            <img
              src={wordmark}
              alt="خدمات اطّلاع"
              className="mx-auto w-4/5 mix-blend-multiply"
            />

            <div className="mt-8 flex items-end justify-between gap-6">
              <div className="animate-float-slow shrink-0">
                <img src={logo} alt="منصة أبشر" className="w-32 mix-blend-multiply sm:w-36" />
              </div>
              <div className="rounded-2xl border-2 border-dashed border-[#0B3D2E]/15 bg-[#F6F9F1] p-3 text-center">
                <img src={qr} alt="رمز واتساب" className="w-24 mix-blend-multiply sm:w-28" />
                <p className="mt-2 flex items-center justify-center gap-1 text-[11px] font-bold text-[#0B3D2E]/60">
                  <ScanLine className="h-3.5 w-3.5" />
                  امسح للتواصل
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
