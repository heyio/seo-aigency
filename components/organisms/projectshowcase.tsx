import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProjectShowcase() {
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

  const columnData = [
    {
      title: 'Project 1',
      images: [
        'public/images/unsplash.jpg?height=300&width=400',
        'public/images/unsplash.jpg?height=300&width=400',
      ],
      description:
        "Optimize your website's content and structure to improve search engine rankings and user experience.",
      listItems: [
        'Keyword optimization',
        'Meta tags improvement',
        'Content quality enhancement',
        'URL structure optimization',
        'Internal linking strategy',
      ],
    },
    {
      title: 'Project 2',
      images: [
        'public/images/unsplash.jpg?height=300&width=400',
        'public/images/unsplash.jpg?height=300&width=400',
      ],
      description:
        "Build your website's authority and reputation through external optimization techniques.",
      listItems: [
        'Link building',
        'Social media marketing',
        'Influencer outreach',
        'Brand mentions',
        'Local SEO strategies',
      ],
    },
    {
      title: 'Project 3',
      images: [
        'public/images/unsplash.jpg?height=300&width=400',
        'public/images/unsplash.jpg?height=300&width=400',
      ],
      description:
        "Build your website's authority and reputation through external optimization techniques.",
      listItems: [
        'Link building',
        'Social media marketing',
        'Influencer outreach',
        'Brand mentions',
        'Local SEO strategies',
      ],
    },
  ];

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
          Our Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columnData.map((column, columnIndex) => (
            <motion.div key={columnIndex} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">
                    {column.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={`/unsplash.jpg?height=256&width=384`}
                      alt={`Project ${columnIndex}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">{column.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {column.listItems.map((column, columnIndex) => (
                      <li key={columnIndex} className="text-gray-600">
                        {column}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
