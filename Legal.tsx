import { motion } from 'motion/react';
import { Section, GradientText, Card } from './UI';

const legalSections = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    body: 'We only collect the information you submit through this website so we can respond to your inquiry, evaluate project needs, and improve our services. We do not sell your personal information, and website submissions are only shared with internal team members or service providers involved in responding to your request.',
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    body: 'The content on this site is provided for general information about our services. Project timelines, pricing, and technical scope are finalized only through direct written agreement. Unauthorized copying, misuse, or interference with the website is prohibited.',
  },
  {
    id: 'cookies',
    title: 'Cookie Policy',
    body: 'This website may use essential browser storage, analytics, and performance-related technologies to keep the site functional and understand usage patterns. By continuing to use the site, you consent to these limited technical uses. You can manage cookies through your browser settings.',
  },
];

export const Legal = () => {
  return (
    <div className="pt-20">
      <Section className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 text-5xl font-display font-bold md:text-7xl">
            Legal <GradientText>Information</GradientText>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
            Clear details about how the company handles site data, service usage, and visitor privacy.
          </p>
        </motion.div>
      </Section>

      <Section className="space-y-8">
        {legalSections.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="p-8 md:p-10">
              <h2 className="mb-4 text-2xl font-display font-bold md:text-3xl">{section.title}</h2>
              <p className="leading-relaxed text-gray-400">{section.body}</p>
            </Card>
          </motion.div>
        ))}
      </Section>
    </div>
  );
};
