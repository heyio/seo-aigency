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
          Plans and Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Basic', price: '$499/mo', checkFrequency: 'Once a month' },
            { name: 'Pro', price: '$999/mo', checkFrequency: 'Once a week' },
            { name: 'Enterprise', price: '$1999/mo', checkFrequency: 'Twice a week' }
          ].map((plan, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className={selectedPlan === plan.name.toLowerCase() ? 'border-purple-500 border-2 bg-gradient-to-b from-white to-purple-200' : 
              'bg-gradient-to-b from-white to-gray-100'}>
                <CardHeader>
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <CardDescription className="text-xl">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>SEO optimized website content</li>
                    <li>Human check {plan.checkFrequency}</li>
                    <li>Handholding service</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={selectedPlan === plan.name.toLowerCase() ? 'w-full text-base font-semibold' : 
              'w-full text-base font-semibold'}
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                  >
                    Choose Plan
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