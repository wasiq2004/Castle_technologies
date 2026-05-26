/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Section, GradientText, Card } from './UI';

export const About = () => {
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

    </div>
  );
};
