import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { WA_LINK } from '@/data/content'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1, rotate: -6 }}
      whileTap={{ scale: 0.94 }}
      className="animate-ring fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#1E7A4B] text-white shadow-2xl shadow-[#1E7A4B]/40"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  )
}
