/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Section, GradientText, Card } from '../components/UI';

export const About = () => {
  const team = [
    { name: 'Alex Castle', role: 'Founder & CEO', image: 'https://picsum.photos/seed/alex/400/400' },
    { name: 'Elena Vance', role: 'Head of AI', image: 'https://picsum.photos/seed/elena/400/400' },
    { name: 'Marcus Wright', role: 'Lead Developer', image: 'https://picsum.photos/seed/marcus/400/400' },
    { name: 'Sofia Chen', role: 'UX Director', image: 'https://picsum.photos/seed/sofia/400/400' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            We Don't Just Build Tech — <br /> We Build the <GradientText>Future</GradientText>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Castle Technologies was founded on the principle that technology should be a catalyst for human potential. We combine deep technical expertise with visionary design to create solutions that matter.
          </p>
        </motion.div>
      </Section>

      {/* Story */}
      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our <GradientText>Story</GradientText></h2>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              Founded in 2020, Castle Technologies started as a small team of passionate engineers and designers in a garage. We saw a gap in the market for high-end, futuristic technology solutions that didn't just work, but inspired.
            </p>
            <p>
              Today, we are a global team of specialists working with startups and Fortune 500 companies alike. Our mission remains the same: to push the boundaries of what's possible through innovation, integrity, and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Years of Innovation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Expert Specialists</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-video rounded-3xl overflow-hidden glass border-white/10">
            <img 
              src="https://picsum.photos/seed/office/800/600" 
              alt="Our Office" 
              className="w-full h-full object-cover opacity-70"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-bg-soft/50 rounded-[40px] my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="p-10">
            <h3 className="text-2xl font-display font-bold mb-6 text-primary">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower businesses through cutting-edge technology solutions that are scalable, secure, and stunningly designed. We strive to be the bridge between complex technology and intuitive user experiences.
            </p>
          </Card>
          <Card className="p-10">
            <h3 className="text-2xl font-display font-bold mb-6 text-secondary">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the world's leading technology partner, recognized for our futuristic approach and commitment to building a better digital world for everyone.
            </p>
          </Card>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Meet the <GradientText>Visionaries</GradientText></h2>
          <p className="text-gray-400">The brilliant minds behind Castle Technologies.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 glass border-white/10">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a href="#" className="p-2 glass rounded-full hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="p-2 glass rounded-full hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href="#" className="p-2 glass rounded-full hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-center mb-1">{member.name}</h4>
              <p className="text-primary text-sm text-center font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
