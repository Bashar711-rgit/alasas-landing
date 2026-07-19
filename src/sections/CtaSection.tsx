import { MessageCircle, Phone, ScanLine } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { WA_LINK, PHONE_DISPLAY, PHONE_INTL } from '@/data/content'
import { qr } from '@/assets/images'

export function CtaSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-[#12573C] via-[#0B3D2E] to-[#0B3D2E] px-8 py-14 shadow-[0_40px_90px_-30px_rgba(11,61,46,0.6)] sm:px-14 lg:px-20 lg:py-20">
            <div className="bg-dots absolute inset-0 opacity-[0.12] invert" aria-hidden />
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#CDE94F]/15 blur-3xl" aria-hidden />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.4fr_auto]">
              <div className="text-center lg:text-right">
                <h2 className="font-display text-balance text-3xl font-black leading-snug text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.35]">
                  خدمات تعليمية أخرى متكاملة
                  <span className="text-[#CDE94F]"> حسب طلبك</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
                  فريق عمل متكامل جاهز لخدمتك الآن — راسلنا على واتساب أو امسح الرمز
                  وسنرد عليك في أسرع وقت.
                </p>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-2xl bg-[#CDE94F] px-8 py-4 text-base font-black text-[#0B3D2E] shadow-xl shadow-[#CDE94F]/25 transition-all duration-300 hover:-translate-y-1 hover:brightness-105"
                  >
                    <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                    ابدأ المحادثة الآن
                  </a>
                  <a
                    href={`tel:+${PHONE_INTL}`}
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/20 px-6 py-[14px] text-base font-bold text-white transition-all duration-300 hover:border-[#CDE94F]/60 hover:bg-white/5"
                    dir="ltr"
                  >
                    <Phone className="h-4 w-4 text-[#CDE94F]" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="mx-auto rounded-3xl bg-white p-5 text-center shadow-2xl transition-transform duration-500 hover:scale-105 hover:-rotate-1">
                <img src={qr} alt="رمز واتساب منصة الأسس" className="w-40 mix-blend-multiply sm:w-44" />
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-[#0B3D2E]/60">
                  <ScanLine className="h-4 w-4" />
                  امسح للتواصل الفوري
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
