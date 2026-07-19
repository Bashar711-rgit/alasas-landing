import { Reveal } from '@/components/Reveal'
import { SERVICES } from '@/data/content'

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#0B3D2E] px-4 py-1.5 text-sm font-bold text-[#CDE94F]">
            خدماتنا
          </span>
          <h2 className="font-display mt-5 text-3xl font-black text-[#0B3D2E] sm:text-4xl lg:text-5xl">
            منظومة خدمات تعليمية متكاملة
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0B3D2E]/60">
            كل ما تحتاجه في مسيرتك الدراسية، يقدّمه لك فريق متخصص باحترافية وإتقان.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-[#0B3D2E]/8 bg-white p-7 shadow-[0_10px_40px_-20px_rgba(11,61,46,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#7CB342]/40 hover:shadow-[0_28px_60px_-24px_rgba(30,122,75,0.45)]">
                <span
                  className="font-display pointer-events-none absolute -top-3 left-4 text-7xl font-black text-[#0B3D2E]/[0.05] transition-colors duration-500 group-hover:text-[#7CB342]/15"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B3D2E] text-[#CDE94F] shadow-lg shadow-[#0B3D2E]/25 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#CDE94F] group-hover:text-[#0B3D2E]">
                  <s.icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <h3 className="font-display text-xl font-black text-[#0B3D2E]">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#0B3D2E]/60">{s.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#F0F6E4] px-3 py-1 text-xs font-bold text-[#3F6212] transition-colors duration-300 group-hover:bg-[#CDE94F]/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
