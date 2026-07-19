import { Reveal } from '@/components/Reveal'
import { FEATURES, BRAND, BRAND_EN } from '@/data/content'
import { logo } from '@/assets/images'

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-[#0B3D2E] py-24 lg:py-32">
      {/* زخارف */}
      <div className="bg-dots absolute inset-0 opacity-[0.15] invert" aria-hidden />
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#CDE94F]/10 blur-3xl" aria-hidden />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#1E7A4B]/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.35fr] lg:px-8">
        {/* بطاقة الشعار */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm rounded-[2.5rem] bg-white p-10 text-center shadow-2xl">
            <div className="absolute inset-x-12 top-0 h-1.5 rounded-b-full bg-gradient-to-l from-[#1E7A4B] to-[#CDE94F]" aria-hidden />
            <img src={logo} alt={BRAND} className="animate-float-slow mx-auto w-56 mix-blend-multiply" />
            <p className="font-display mt-4 text-2xl font-black text-[#0B3D2E]">{BRAND}</p>
            <p className="mt-1 text-sm font-bold tracking-[0.3em] text-[#7CB342]">{BRAND_EN}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#0B3D2E]/60">
              فريق عمل متكامل لمنصة تعليمية متميزة، يضع خبرته بين يديك.
            </p>
          </div>
        </Reveal>

        {/* المزايا */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-block rounded-full bg-[#CDE94F] px-4 py-1.5 text-sm font-bold text-[#0B3D2E]">
              لماذا نحن؟
            </span>
            <h2 className="font-display mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              وعدنا لك في كل خدمة
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-[#CDE94F]/40 hover:bg-white/[0.1]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CDE94F] text-[#0B3D2E] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <f.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-lg font-black text-white">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/65">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
