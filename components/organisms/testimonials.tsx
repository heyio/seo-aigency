import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import AvatarCircles from '../ui/avatar-circles';

export default function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const avatarUrls = [
    'https://avatars.githubusercontent.com/u/16860528',
    'https://avatars.githubusercontent.com/u/20110627',
    'https://avatars.githubusercontent.com/u/106103625',
    'https://avatars.githubusercontent.com/u/59228569',
  ];

  return (
    <motion.section
      className="py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          variants={fadeInUp}
        >
          Was unsere Kunden sagen
        </motion.h2>
        <div className="max-w-screen relative flex flex-col items-center justify-center bg-background p-0 md:pb-12">
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              text: 'Die SEO Agentur hat uns geholfen, unseren organischen Traffic in nur 3 Monaten um 200% zu steigern. Sehr empfehlenswert!',
              name: 'Johannes Müller',
              position: 'CEO von TechCorp',
            },
            {
              text: 'Dank der SEO-Strategien der Agentur hat sich unser Online-Umsatz verdoppelt. Wir sind begeistert von den Ergebnissen!',
              name: 'Anna Schmidt',
              position: 'Marketing Managerin',
            },
            {
              text: 'Professionell, effizient und mit messbaren Ergebnissen. Die SEO Agentur ist ein unverzichtbarer Partner für unser Geschäft geworden.',
              name: 'Michael Weber',
              position: 'Inhaber, Webshop XYZ',
            },
          ].map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{`"${testimonial.text}"`}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
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
