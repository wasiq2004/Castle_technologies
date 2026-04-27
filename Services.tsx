/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Globe, Smartphone, Zap, Cloud, CheckCircle2 } from 'lucide-react';
import { Section, GradientText, Card, Button } from './UI';

export const Services = () => {
  const detailedServices = [
    {
      icon: Cpu,
      title: 'AI Development',
      color: 'from-blue-500 to-cyan-400',
      desc: 'Harness the power of artificial intelligence to automate processes and gain deep insights.',
      features: ['Custom LLM Integration', 'Predictive Analytics', 'Computer Vision Systems', 'Natural Language Processing']
    },
    {
      icon: Globe,
      title: 'Web Development',
      color: 'from-purple-500 to-pink-400',
      desc: 'Modern, high-performance web applications built for scale and speed.',
      features: ['React & Next.js Experts', 'E-commerce Solutions', 'Progressive Web Apps', 'Headless CMS Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      color: 'from-orange-500 to-red-400',
      desc: 'Engaging mobile experiences that connect you with your users anywhere.',
      features: ['iOS & Android Native', 'React Native & Flutter', 'App Store Optimization', 'Real-time Features']
    },
    {
      icon: Zap,
      title: 'Automation Systems',
      color: 'from-green-500 to-emerald-400',
      desc: 'Eliminate repetitive tasks and optimize your business workflows.',
      features: ['Workflow Automation', 'API Integrations', 'Custom ERP Systems', 'Legacy System Modernization']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-indigo-500 to-blue-400',
      desc: 'Secure and scalable infrastructure that powers your digital products.',
      features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Security Audits']
    }
  ];

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
            Our <GradientText>Expertise</GradientText>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive suite of technology services designed to help modern businesses thrive in an increasingly digital world.
          </p>
        </motion.div>
      </Section>

      {/* Detailed Services */}
      <Section className="space-y-32">
        {detailedServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
          >
            <div className="flex-1">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{service.title}</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="primary" href="/contact">Get a Quote</Button>
            </div>
            
            <div className="flex-1 w-full">
              <Card className="aspect-video relative overflow-hidden p-0 group">
                <img 
                  src={`https://picsum.photos/seed/${service.title.toLowerCase().replace(/\s/g, '-')}/800/600`} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-bg-deep/80 to-transparent" />
              </Card>
            </div>
          </motion.div>
        ))}
      </Section>

      {/* Pricing Section (Extra) */}
      <Section className="bg-bg-soft/50 rounded-[40px] my-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Flexible <GradientText>Pricing</GradientText></h2>
          <p className="text-gray-400">Solutions for every stage of your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Startup', price: '2,499', features: ['Single Platform', 'Basic AI Integration', 'Standard Support', '1 Month Delivery'] },
            { name: 'Business', price: '5,999', features: ['Multi-platform', 'Advanced AI', 'Priority Support', '3 Months Delivery'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Full Ecosystem', 'Custom AI Models', '24/7 Dedicated Support', 'Ongoing Partnership'] },
          ].map((plan) => (
            <Card key={plan.name} className={`p-10 flex flex-col ${plan.popular ? 'border-primary/50 glow-primary' : ''}`}>
              {plan.popular && <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Most Popular</div>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500 text-sm">/project</span>}
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="text-sm text-gray-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full" href="/contact">Choose Plan</Button>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};
