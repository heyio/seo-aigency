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
          Why Choose <span className="text-purple-500">SEO AI</span>GENCY?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Expertise', 'Customized Strategies', 'Transparent Reporting', 'Cutting-edge Techniques', 'Dedicated Support', 'Proven Results'].map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We offer {feature.toLowerCase()} that sets us apart from other SEO agencies, ensuring your success.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}