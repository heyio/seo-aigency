import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Star } from 'lucide-react';
import { title } from 'process';

export default function Ratings() {
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
      className="py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeInUp}
        >
          Unsere Kunden sind von den Ergebnissen begeistert
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Markus Fischer, Gründer von FischerTech Innovations',
              image: [
                'public/images/unsplash.jpg?height=300&width=400',
              ],
              description:
                "Nach der Umsetzung der SEO AIgency-Strategien stieg der Traffic unserer Website um 150 %.",
            },
            {
              title: 'Anna Weber, CEO von Berlin Webworks',
              image: [
                'public/images/unsplash.jpg?height=300&width=400'
              ],
              description:
                "Dank des innovativen Ansatzes von SEO AIgency sind unsere organischen Suchergebnisse in die Höhe geschnellt. Wir haben innerhalb von nur zwei Monaten einen Anstieg der Leads um 200 % verzeichnet!",
            },
            {
              title: 'Lukas Schmidt, Marketing Director von DACH Solutions',
              image: [
                'public/images/unsplash.jpg?height=300&width=400'
              ],
              description:
                "Die von SEO AIgency umgesetzten KI-gesteuerten Strategien haben nicht nur unsere Sichtbarkeit erhöht, sondern auch unser Nutzerengagement deutlich verbessert. Wir sind mit den Ergebnissen mehr als zufrieden."
            }
          ].map((rating, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </CardTitle>
                  <CardDescription>
                    {rating.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    {rating.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
