/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, GradientText, Button, Card } from './UI';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web'];

  const projects = [
    { id: 1, title: 'Vish Design Studio', category: 'Web', image: 'https://image.thum.io/get/width/1600/noanimate/https://www.vishdesignstudio.com', url: 'https://www.vishdesignstudio.com', desc: 'Creative agency website preview loaded from vishdesignstudio.com.' },
    { id: 2, title: 'Apex Skill Tech', category: 'Web', image: 'https://image.thum.io/get/width/1600/noanimate/https://apexskilltech.com/', url: 'https://apexskilltech.com/', desc: 'Business website preview loaded from apexskilltech.com.' },
    { id: 3, title: 'Libra Legal Consultancy', category: 'Web', image: 'https://image.thum.io/get/width/1600/noanimate/https://libralegalconsultancy.ae/', url: 'https://libralegalconsultancy.ae/', desc: 'Corporate legal website preview loaded from libralegalconsultancy.ae.' },
    { id: 4, title: 'Dhaanish Chennai WhatsApp', category: 'Web', image: 'https://image.thum.io/get/width/1600/noanimate/https://whatsapp.dhaanishchennai.in/', url: 'https://whatsapp.dhaanishchennai.in/', desc: 'Landing page preview loaded from whatsapp.dhaanishchennai.in.' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      {/* Header */}
      <Section className="text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Our <GradientText>Work</GradientText>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of cutting-edge digital products and futuristic technology solutions.
          </p>
        </motion.div>
      </Section>

      {/* Filter */}
      <Section className="py-0">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? 'bg-primary text-white glow-primary' : 'glass text-gray-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 glass border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center opacity-100 transition-opacity duration-300 md:p-8 md:opacity-0 md:group-hover:opacity-100">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-6">{project.desc}</p>
                    <Button variant="primary" className="scale-90 group-hover:scale-100 transition-transform" href={project.url}>Visit Website</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* FAQ Section (Extra) */}
      <Section className="my-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Frequently Asked <GradientText>Questions</GradientText></h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'How long does a typical project take?', a: 'Project timelines vary depending on complexity. A standard web application usually takes 4-8 weeks, while complex AI systems can take 3-6 months.' },
            { q: 'What technologies do you specialize in?', a: 'We specialize in React, Next.js, Python, TensorFlow, Node.js, and cloud infrastructure like AWS and GCP.' },
            { q: 'Do you offer ongoing maintenance?', a: 'Yes, we provide comprehensive maintenance and support packages to ensure your technology remains up-to-date and secure.' },
            { q: 'Can you help with legacy system migration?', a: 'Absolutely. We have extensive experience in modernizing legacy systems and migrating them to modern cloud architectures.' },
          ].map((item, i) => (
            <Card key={i} className="p-6">
              <h4 className="font-bold mb-2 flex justify-between items-center group cursor-pointer">
                {item.q}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};
