import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface PricingProps {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
}

export default function Pricing({ selectedPlan, setSelectedPlan }: PricingProps) {
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
      className="py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={fadeInUp}>
          Wählen Sie ein Abonnement für ihr Wachstum
        </motion.h2>
        <motion.div className="text-lg mb-8 text-center max-w-2xl mx-auto" variants={fadeInUp}>
          Was ist Ihr Ziel? Wählen Sie ein Abonnement, das auf die Bedürfnisse Ihres Unternehmens zugeschnitten ist, und fügen Sie weitere Funktionen hinzu, um Ihren Erfolg zu sichern.
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Basic', price: 'EUR 49/month', checkFrequency: '1x Page' },
            { name: 'Pro', price: 'EUR 99/month', checkFrequency: '5x Pages' },
            { name: 'Boost', price: 'EUR 299/month', checkFrequency: '10x Pages' }
          ].map((plan, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className={selectedPlan === plan.name.toLowerCase() ? 'border-purple-500 border-2 bg-white' :
                'bg-white'}>
                <CardHeader>
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <CardDescription className="text-xl">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>SEO-optimierter Website-Inhalt</li>
                    <li>{plan.checkFrequency}</li>
                    <li>Geführte Unterstützung</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={selectedPlan === plan.name.toLowerCase() ? 'w-full text-base font-semibold' :
                      'w-full text-base font-semibold'}
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                  >
                    Abo wählen
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}