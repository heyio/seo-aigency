import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQ() {

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

  const faqs = [
    { question: "Was ist SEO?", answer: "SEO steht für Suchmaschinenoptimierung. Es ist die Praxis, Ihre Website zu optimieren, um ihre Sichtbarkeit in den Suchergebnissen zu erhöhen." },
    { question: "Wie lange dauert es, bis man Ergebnisse sieht?", answer: "SEO ist eine langfristige Strategie. Einige Verbesserungen können innerhalb weniger Wochen sichtbar sein, aber signifikante Ergebnisse dauern in der Regel 3-6 Monate." },
    { question: "Garantieren Sie Platzierungen auf der ersten Seite?", answer: "Wir garantieren keine spezifischen Platzierungen, da Suchmaschinen ihre Algorithmen häufig aktualisieren. Wir garantieren jedoch, die Sichtbarkeit Ihrer Website und den organischen Traffic erheblich zu verbessern." },
    { question: "Was ist in Ihren SEO-Dienstleistungen enthalten?", answer: "Unsere Dienstleistungen umfassen Keyword-Recherche, On-Page-Optimierung, Content-Erstellung, Linkaufbau und regelmäßige Leistungsberichte. Zusätzlich zu den Checks durch unseren SEO AIGENCY Service, führen wir einen SEO-Check in Ihrem gewählten Intervall durch unser engagiertes Personal durch, führen Optimierungen durch und lassen Ihnen einen Report zukommen." },
    { question: "Wie messen Sie den SEO-Erfolg?", answer: "Wir verfolgen verschiedene Metriken wie organischen Traffic, Keyword-Rankings, Conversion-Raten und ROI (return-on-investment), um den Erfolg unserer SEO-Kampagnen zu messen." },
    { question: "Bieten Sie lokale SEO-Dienstleistungen an?", answer: "Ja, wir bieten lokale SEO-Dienstleistungen an, um Unternehmen zu helfen, ihre Sichtbarkeit in den Suchergebnissen zu verbessern." },
    { question: "Können Sie bei E-Commerce-SEO helfen?", answer: "Wir haben umfangreiche Erfahrung in der Optimierung von E-Commerce-Websites, um die Sichtbarkeit von Produkten zu verbessern und den Umsatz zu steigern." },
    { question: "Wie oft erhalte ich Fortschrittsberichte?", answer: "Wir stellen detaillierte monatliche Berichte zur Verfügung, aber Sie haben jederzeit Zugriff auf Echtzeit-Dashboards, um Ihren Fortschritt zu verfolgen." },
    { question: "Bieten Sie Content-Erstellungsdienste an?", answer: "Ja, wir bieten Content-Erstellungsdienste als Teil unserer SEO-Pakete an. Dazu gehören u.a. Umformulierungen von Inhalten auf Ihrer Website sodass Kunden sie besser finden können." },
    { question: "Was macht Ihre SEO-Agentur anders als andere?", answer: "Wir kombinieren fortschrittliche SEO-Techniken mit personalisierten Strategien und Kundenservice, um herausragende Ergebnisse für unsere Kunden zu erzielen." }
  ]

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
          Häufig gestellte Fragen
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-bold text-xl">{item.question}</AccordionTrigger>
                <AccordionContent className="text-lg">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  )
}