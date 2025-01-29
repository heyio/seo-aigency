import { motion } from 'framer-motion';

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto p-8">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          variants={fadeInUp}
        >
          Wie funktioniert SEO Aigency?
        </motion.h2>
        <ul className="space-y-6 text-left text-gray-500 dark:text-gray-400">
          <li className="text-center text-xl font-semibold">
            <strong>Website Audit</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Gib deine Website-URL ein und erhalte eine erste SEO-Analyse mit Page Speed Insights.</li>
            </ul>
          </li>
          <li className="text-center text-xl font-semibold">
            <strong>Verwalte mehrere Projekte</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Mit SEO AIgency behältst du mehrere SEO Projekte leicht im Überblick.</li>
            </ul>
          </li>
          <li className="text-center text-xl font-semibold">
            <strong>Technische Optimierung</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Du erhältst technische Optimierungen, die du spielerisch durchführen kannst.</li>
            </ul>
          </li>
          <li className="text-center text-xl font-semibold">
            <strong>Technischer Deep Check</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Führe einen technischen Deep-Check durch und erhalte Vorschläge zur Optimierung von Elementen und dem Aufbau auf deiner Website.</li>
            </ul>
          </li>
          <li className="text-center text-xl font-semibold">
            <strong>Inhaltliche Optimierung</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Optimiere bestehende Inhalte auf deiner Website durch Vorschläge von SEO Aigency.</li>
            </ul>
          </li>
          <li className="text-center text-xl font-semibold">
            <strong>Keyword Check</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Definiere Keywords und optimiere deine Inhalte, inklusive einer Keyword-Analyse der Konkurrenz.</li>
            </ul>
          </li>
          <li className="text-center text-xl font-semibold">
            <strong>Optimierung für die Empfehlung von AI Chatbots wie ChatGPT</strong>
            <ul className="ps-5 mt-2 spae-y-1 list-inside font-normal">
              <li>Unsere Lösung optimiert Inhalte der Kundenwebseiten so, dass AI Chatbots wie ChatGPT sie empfehlen.</li>
            </ul>
          </li>
          <li className="text-center text-xl font-semibold">
            <strong>Human Check</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Buche live Human Support via Video-Call für individuelle Unterstützung.</li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
