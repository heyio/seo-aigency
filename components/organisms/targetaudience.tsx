import { motion } from 'framer-motion'

export default function TargetAudience() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={fadeInUp}>
          Wer kann von unseren Dienstleistungen profitieren?
        </motion.h2>
        <motion.ul className="list-disc list-inside text-lg max-w-2xl mx-auto" variants={fadeInUp}>
          <li>Kleinunternehmer, die ihre <span className="text-purple-500">Online-Präsenz verstärken</span> möchten</li>
          <li>E-Commerce-Geschäfte, die <span className="text-purple-500">grösseres organisches Wachstum</span> erzeugen wollen</li>
          <li>Lokale Unternehmen, die die <span className="text-purple-500">lokalen Suchergebnisse dominieren</span> wollen</li>
          <li>Start-ups, die eine <span className="text-purple-500">starke Online-Präsenz aufbauen</span> wollen</li>
          <li>Etablierte Unternehmen, die der <span className="text-purple-500">Konkurrenz einen Schritt voraus sein</span> wollen</li>
        </motion.ul>
      </div>
    </motion.section>
  )
}