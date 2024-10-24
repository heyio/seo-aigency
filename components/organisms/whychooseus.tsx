import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function WhyChooseUs() {
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
          Warum <span className="text-purple-500">SEO AI</span>GENCY wählen?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expertise & Fachwissen",
              description: "Mit jahrelanger praktischer Erfahrung und einem tiefgreifenden Verständnis von SEO sind wir bestrebt, Ihre Online-Sichtbarkeit zu steigern."
            },
            {
              title: "Maßgeschneiderte StrategienHum",
              description: "Durch unseren Human-Check passen wir unsere SEO-Strategien an Ihre individuellen Geschäftsbedürfnisse an, um maximale Wirkung und nachhaltiges Wachstum zu gewährleisten."
            },
            {
              title: "Berichterstattung",
              description: "Mit unseren detaillierten Berichten, die genau zeigen, wie sich Ihre SEO-Optimierungen auswirken, sind Sie bei jedem Schritt informiert."
            },
            {
              title: "Moderne SEO Techniken",
              description: "Wir sind stets am neuesten Stand der Dinge und nutzen die neuesten SEO-Techniken, damit Sie in einer sich ständig weiterentwickelnden digitalen Landschaft wettbewerbsfähig bleiben."
            },
            {
              title: "Engagierte Unterstützung",
              description: "Unser engagiertes Team steht Ihnen zur Verfügung, um Sie persönlich zu unterstützen und sicherzustellen, dass Sie die gewünschten Ergebnisse erzielen."
            },
            {
              title: "Nachgewiesene Ergebnisse",
              description: "Mit einer Erfolgsbilanz haben unsere bewährten Methoden unzähligen Unternehmen zu Top-Rankings und langfristigem Wachstum verholfen."
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}