import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Loader2 } from 'lucide-react';
import { Section, GradientText, Card, Button } from './UI';
import { submitContactForm } from './lib/forms';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'AI Development', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      setStatus('error');
    }
  };

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
            Get in <GradientText>Touch</GradientText>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's build something extraordinary together.
          </p>
        </motion.div>
      </Section>

      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Service Interested In</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option className="bg-bg-soft" value="AI Development">AI Development</option>
                  <option className="bg-bg-soft" value="Web Development">Web Development</option>
                  <option className="bg-bg-soft" value="Mobile App Development">Mobile App Development</option>
                  <option className="bg-bg-soft" value="Automation Systems">Automation Systems</option>
                  <option className="bg-bg-soft" value="Cloud & DevOps">Cloud & DevOps</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button 
                variant="primary" 
                className="w-full py-4" 
                type="submit"
                icon={status === 'loading' ? Loader2 : Send}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">{errorMessage || 'Failed to send message. Please try again.'}</p>
              )}
            </form>
          </Card>
        </motion.div>


        {/* Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Email Us</h4>
                <p className="text-xs text-gray-400">castle.techy@gmail.com</p>
              </div>
            </Card>
            {/* <Card className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Call Us</h4>
                <p className="text-xs text-gray-400">+1 (888) CASTLE-0</p>
              </div>
            </Card> */}
            {/* <Card className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Visit Us</h4>
                <p className="text-xs text-gray-400">123 Future Plaza, Silicon Valley, CA</p>
              </div>
            </Card> */}
            {/* <Card className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <Globe className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Global Presence</h4>
                <p className="text-xs text-gray-400">Offices in Singapore, India, Dubai</p>
              </div>
            </Card> */}
          </div>

          {/* <div className="aspect-square lg:aspect-auto lg:h-[400px] rounded-3xl overflow-hidden glass border-white/10 relative">
            <img 
              src="https://picsum.photos/seed/map/800/800" 
              alt="Map" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute inset-0" />
                <div className="w-12 h-12 bg-primary rounded-full relative flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <MapPin className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="flex justify-center gap-6">
            <a href="mailto:castle.techy@gmail.com?subject=Project%20Inquiry" aria-label="Email Castle Technologies" className="p-4 glass rounded-2xl hover:text-primary transition-colors"><MessageSquare className="w-6 h-6" /></a>
            <a href="/" aria-label="Go to homepage" className="p-4 glass rounded-2xl hover:text-primary transition-colors"><Globe className="w-6 h-6" /></a>
            <a href="mailto:castle.techy@gmail.com" aria-label="Send an email to Castle Technologies" className="p-4 glass rounded-2xl hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
          </div> */}
        </motion.div>
      </Section>
    </div>
  );
};
