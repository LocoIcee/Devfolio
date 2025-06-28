'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if user is typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        onSubmitSuccess();
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-800"
    >
      <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className={errors.name ? 'text-red-400' : ''}>
            Your Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`bg-gray-900/50 border ${errors.name ? 'border-red-400' : 'border-gray-700'} mt-1`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <Label htmlFor="email" className={errors.email ? 'text-red-400' : ''}>
            Your Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className={`bg-gray-900/50 border ${errors.email ? 'border-red-400' : 'border-gray-700'} mt-1`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <Label htmlFor="subject" className={errors.subject ? 'text-red-400' : ''}>
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            className={`bg-gray-900/50 border ${errors.subject ? 'border-red-400' : 'border-gray-700'} mt-1`}
            placeholder="Project Inquiry"
          />
          {errors.subject && <p className="text-sm text-red-400 mt-1">{errors.subject}</p>}
        </div>
        
        <div>
          <Label htmlFor="message" className={errors.message ? 'text-red-400' : ''}>
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className={`bg-gray-900/50 border ${errors.message ? 'border-red-400' : 'border-gray-700'} min-h-[150px] mt-1`}
            placeholder="I'd like to discuss a project idea..."
          />
          {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message}</p>}
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-linear-to-r from-blue-600 to-green-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-500/20 transition-all"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </div>
          )}
        </Button>
      </form>
    </motion.div>
  );
}