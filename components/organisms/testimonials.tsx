import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
//import AvatarCircles from '@/components/ui/avatar-circles';

export default function Testimonials() {
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

  //const avatarUrls = [
  //  "https://avatars.githubusercontent.com/u/16860528",
  //  "https://avatars.githubusercontent.com/u/20110627",
  //  "https://avatars.githubusercontent.com/u/106103625",
  //  "https://avatars.githubusercontent.com/u/59228569",
  //];

  //         <div className="grid mx-auto text-center w-full"><AvatarCircles numPeople={99} avatarUrls={avatarUrls} /></div>

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
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Amazing Results</CardTitle>
                  <CardDescription>John Doe, CEO of TechCorp</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    {`"SEO AIgency helped us increase our organic traffic by 200%
                    in just 3 months. Highly recommended!"`}
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
