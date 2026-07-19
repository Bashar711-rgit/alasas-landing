import {
  BookOpenCheck,
  Presentation,
  FileText,
  IdCard,
  Globe2,
  ClipboardCheck,
  MonitorCheck,
  Sparkles,
  ShieldCheck,
  Award,
  Gauge,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react'

export const BRAND = 'منصة الأسس'
export const BRAND_EN = 'STUDENTS HELP'
export const PHONE_DISPLAY = '+966 57 856 8011'
export const PHONE_INTL = '966578568011'
export const WA_LINK = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
  'مرحبًا، أود الاستفسار عن خدمات منصة الأسس'
)}`

export interface Service {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}

export const SERVICES: Service[] = [
  {
    icon: BookOpenCheck,
    title: 'كتابة الأبحاث',
    desc: 'إعداد احترافي للأبحاث بمختلف أنواعها ومنهجياتها.',
    tags: ['موضوعية', 'علمية', 'أبحاث تخرج'],
  },
  {
    icon: Presentation,
    title: 'العروض التقديمية',
    desc: 'تصميم وإنشاء عروض تقديمية جذابة تُبرز فكرتك.',
    tags: ['تصميم', 'إنشاء', 'إخراج احترافي'],
  },
  {
    icon: FileText,
    title: 'ملخصات احترافية',
    desc: 'تلخيص دقيق ومنظم يختصر المادة ويسهّل المراجعة.',
    tags: ['تلخيص', 'تنظيم', 'مراجعة'],
  },
  {
    icon: IdCard,
    title: 'السيرة الذاتية',
    desc: 'سيرة ذاتية متوافقة مع نظام ATS وبجميع الأنماط.',
    tags: ['ATS', 'إلكترونية', 'وظيفية', 'زمنية', 'أكاديمية'],
  },
  {
    icon: Globe2,
    title: 'إنشاء مواقع الويب',
    desc: 'تصميم وتطوير مواقع حديثة تعكس هويتك.',
    tags: ['تصميم', 'تطوير', 'هوية رقمية'],
  },
  {
    icon: ClipboardCheck,
    title: 'الواجبات والتكاليف',
    desc: 'حل الواجبات والتكاليف ومشاريع التخرج بإتقان.',
    tags: ['واجبات', 'تكاليف', 'مشاريع تخرج'],
  },
  {
    icon: MonitorCheck,
    title: 'متابعة الترم أون لاين',
    desc: 'متابعة الواجبات وحضور المحاضرات أون لاين للترم كاملًا.',
    tags: ['اختبارات', 'محاضرات', 'ترم كامل'],
  },
  {
    icon: Sparkles,
    title: 'خدمات حسب الطلب',
    desc: 'خدمات تعليمية أخرى متكاملة حسب طلب الطالب.',
    tags: ['حلول مخصصة', 'تكامل', 'مرونة'],
  },
]

export interface Feature {
  icon: LucideIcon
  title: string
  desc: string
}

export const FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'سرية تامة',
    desc: 'حماية معلوماتك أولويتنا — بياناتك في أمان كامل.',
  },
  {
    icon: Award,
    title: 'جودة عالية',
    desc: 'معايير دقيقة في كل تسليم، بلا أي تنازل.',
  },
  {
    icon: Gauge,
    title: 'سرعة في الإنجاز',
    desc: 'تسليم سريع وفق الوقت المحدد المتفق عليه.',
  },
  {
    icon: HeartHandshake,
    title: 'رضاء العملاء',
    desc: 'فريق متكامل يعمل حتى تكون راضيًا تمامًا.',
  },
]

export const MARQUEE_ITEMS = [
  'كتابة الأبحاث',
  'عروض تقديمية',
  'ملخصات احترافية',
  'سيرة ذاتية ATS',
  'مواقع ويب',
  'واجبات وتكاليف',
  'مشاريع تخرج',
  'متابعة الترم أون لاين',
  'خدمات حسب الطلب',
]
