/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { Section, GradientText, Card } from './UI';

export const About = () => {
  const team = [
    { name: 'Alex Castle', role: 'Founder & CEO', image: 'https://picsum.photos/seed/alex/400/400' },
    { name: 'Elena Vance', role: 'Head of AI', image: 'https://picsum.photos/seed/elena/400/400' },
    { name: 'Marcus Wright', role: 'Lead Developer', image: 'https://picsum.photos/seed/marcus/400/400' },
    { name: 'Sofia Chen', role: 'UX Director', image: 'https://picsum.photos/seed/sofia/400/400' },
  ];

  return (
    <div className="pt-20">
      <Section className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 text-5xl font-display font-bold md:text-7xl">
            We Don't Just Build Tech - <br /> We Build the <GradientText>Future</GradientText>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
            Our company was founded on the principle that technology should be a catalyst for human potential. We combine deep technical expertise with visionary design to create solutions that matter.
          </p>
        </motion.div>
      </Section>

      <Section className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="mb-6 text-3xl font-display font-bold md:text-4xl">Our <GradientText>Story</GradientText></h2>
          <div className="space-y-6 leading-relaxed text-gray-400">
            <p>
              Founded in 2020, we started as a small team of passionate engineers and designers in a garage. We saw a gap in the market for high-end, futuristic technology solutions that didn't just work, but inspired.
            </p>
            <p>
              Today, we are a global team of specialists working with startups and Fortune 500 companies alike. Our mission remains the same: to push the boundaries of what's possible through innovation, integrity, and excellence.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">5+</div>
              <div className="text-sm uppercase tracking-widest text-gray-500">Years of Innovation</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-secondary">50+</div>
              <div className="text-sm uppercase tracking-widest text-gray-500">Expert Specialists</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 glass">
            <img
              src="https://picsum.photos/seed/office/800/600"
              alt="Our Office"
              className="h-full w-full object-cover opacity-70"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      <Section className="my-20 rounded-[40px] bg-bg-soft/50">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Card className="p-10">
            <h3 className="mb-6 text-2xl font-display font-bold text-primary">Our Mission</h3>
            <p className="leading-relaxed text-gray-400">
              To empower businesses through cutting-edge technology solutions that are scalable, secure, and stunningly designed. We strive to be the bridge between complex technology and intuitive user experiences.
            </p>
          </Card>
          <Card className="p-10">
            <h3 className="mb-6 text-2xl font-display font-bold text-secondary">Our Vision</h3>
            <p className="leading-relaxed text-gray-400">
              To be the world's leading technology partner, recognized for our futuristic approach and commitment to building a better digital world for everyone.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-display font-bold md:text-5xl">Meet the <GradientText>Visionaries</GradientText></h2>
          <p className="text-gray-400">The brilliant minds behind the company.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl border border-white/10 glass">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-bg-deep to-transparent p-6 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn" className="rounded-full glass p-2 transition-colors hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit X" className="rounded-full glass p-2 transition-colors hover:text-primary"><Twitter className="h-4 w-4" /></a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub" className="rounded-full glass p-2 transition-colors hover:text-primary"><Github className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
              <h4 className="mb-1 text-center text-xl font-bold">{member.name}</h4>
              <p className="text-center text-sm font-medium text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
