/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Globe, Smartphone, Zap, Cloud, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { Button, Card, Section, GradientText } from './UI';

export const Home = () => {
  const services = [
    { icon: Cpu, title: 'AI Solutions', desc: 'Custom machine learning models and intelligent automation for your business.' },
    { icon: Globe, title: 'Web Development', desc: 'High-performance, scalable web applications built with modern frameworks.' },
    { icon: Smartphone, title: 'App Development', desc: 'Native and cross-platform mobile experiences that users love.' },
    { icon: Zap, title: 'Automation Systems', desc: 'Streamline your workflows and increase efficiency with custom automation.' },
    { icon: Cloud, title: 'Cloud & DevOps', desc: 'Secure, scalable cloud infrastructure and continuous delivery pipelines.' },
  ];

  const projects = [
    { title: 'Vish Design Studio', category: 'Web Development', image: 'https://image.thum.io/get/width/1200/noanimate/https://www.vishdesignstudio.com', tech: ['Next.js', 'UI/UX', 'Branding'] },
    { title: 'Vortex E-commerce', category: 'Web Development', image: 'https://picsum.photos/seed/web/800/600', tech: ['Next.js', 'Tailwind', 'Stripe'] },
    { title: 'Zenith App', category: 'Mobile Development', image: 'https://picsum.photos/seed/mobile/800/600', tech: ['React Native', 'Firebase'] },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechFlow', content: 'Their team transformed our legacy systems into a modern, AI-driven powerhouse. Their expertise is unmatched.', rating: 5 },
    { name: 'Michael Chen', role: 'CTO, InnovateX', content: 'The web application they built for us is incredibly fast and intuitive. Our conversion rate increased by 40%.', rating: 5 },
    { name: 'Elena Rodriguez', role: 'Product Manager, CloudScale', content: 'Exceptional attention to detail and a truly futuristic design approach. They are our go-to tech partner.', rating: 5 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 sm:pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-[70%] rounded-full bg-primary/20 blur-[100px] animate-pulse sm:left-1/4 sm:top-1/4 sm:h-96 sm:w-96 sm:translate-x-0 sm:blur-[120px]" />
          <div className="absolute bottom-10 right-0 h-64 w-64 translate-x-1/4 rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-1000 sm:bottom-1/4 sm:right-1/4 sm:h-96 sm:w-96 sm:translate-x-0 sm:blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <Section className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-gray-300 uppercase tracking-widest">Innovation at its peak</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
              Building the <GradientText>Future</GradientText> <br /> of Technology
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Innovative AI, Web, and Automation Solutions designed to scale your business in the modern digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg" icon={ArrowRight} href="/contact">
                Get Started
              </Button>
              <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg" href="/services">
                View Services
              </Button>
            </div>
          </motion.div>
        </Section>
      </section>

      {/* Services Preview */}
      <Section id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our <GradientText>Expertise</GradientText></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We provide cutting-edge solutions across multiple domains to help your business stay ahead.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card glow className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <a href="/services" className="text-primary text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Why Choose <GradientText>Castle Technologies</GradientText>?</h2>
          <div className="space-y-8">
            {[
              { title: 'Cutting-edge Technology', desc: 'We use the latest tools and frameworks to build future-proof solutions.' },
              { title: 'Scalable Solutions', desc: 'Our architectures are designed to grow with your business needs.' },
              { title: 'Fast Delivery', desc: 'Agile methodologies ensure rapid development without compromising quality.' },
              { title: 'Expert Team', desc: 'A dedicated group of specialists committed to your project success.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass border-white/10 p-2">
            <img 
              src="https://picsum.photos/seed/tech-future/800/800" 
              alt="Futuristic Tech" 
              className="w-full h-full object-cover rounded-2xl opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent opacity-60" />
          </div>
          <div className="mt-6 ml-0 inline-block glass rounded-2xl border-white/10 p-4 glow-primary sm:p-6 lg:absolute lg:-bottom-6 lg:-left-6 lg:mt-0">
            <div className="text-3xl font-bold">99%</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest">Client Satisfaction</div>
          </div>
          <div className="mt-4 mr-0 inline-block glass rounded-2xl border-white/10 p-4 glow-secondary sm:p-6 lg:absolute lg:-top-6 lg:-right-6 lg:mt-0">
            <div className="text-3xl font-bold">250+</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest">Projects Completed</div>
          </div>
        </motion.div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured <GradientText>Projects</GradientText></h2>
            <p className="text-gray-400">A glimpse into the digital experiences we've crafted.</p>
          </div>
          <Button variant="outline" href="/projects">View All Projects</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/55 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                  <Button variant="primary" className="scale-90 group-hover:scale-100 transition-transform" href="/projects">View Case Study</Button>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium">{project.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-tighter px-2 py-1 glass rounded-md text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-bg-soft/50 rounded-[40px] my-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Client <GradientText>Feedback</GradientText></h2>
          <p className="text-gray-400">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card key={t.name} className="flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 flex-grow">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Blog / Insights */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Latest <GradientText>Insights</GradientText></h2>
            <p className="text-gray-400">Stay updated with the latest trends in technology.</p>
          </div>
          <Button variant="outline" href="/contact">Contact for Insights</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'The Future of Generative AI in Business', date: 'March 15, 2026', image: 'https://picsum.photos/seed/blog1/800/500' },
            { title: 'Scaling Web Apps with Edge Computing', date: 'March 10, 2026', image: 'https://picsum.photos/seed/blog2/800/500' },
            { title: 'Cybersecurity Trends to Watch in 2026', date: 'March 05, 2026', image: 'https://picsum.photos/seed/blog3/800/500' },
          ].map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 glass border-white/10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">{post.date}</p>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section>
        <div className="relative overflow-hidden rounded-[32px] p-8 text-center sm:p-12 md:rounded-[40px] md:p-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Build Something <br /> Amazing?</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have scaled their operations with our futuristic technology solutions.
            </p>
            <Button variant="secondary" className="px-10 py-4 text-lg" href="/contact">
              Contact Us Today
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};
