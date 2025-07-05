import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { AnimatedWrapper } from '../components/AnimatedWrapper';
import { fadeInUp, fadeInLeft, fadeInRight } from '../components/animations/variants';
import { FiLoader } from 'react-icons/fi';
import axios from 'axios';

interface FormData {
  from_name: string;
  from_email: string;
  phone_number: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  from_name: '',
  from_email: '',
  phone_number: '',
  subject: '',
  message: '',
};

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const year = new Date().getFullYear();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (data: FormData) => {
    const nameRegex = /^[A-Za-z\s\-']+$/;
    const subjectRegex = /^[A-Za-z0-9\s\-.,!?']+$/;
    const phoneRegex = /^[0-9+\-\s()]{6,20}$/;

    if (!nameRegex.test(data.from_name)) {
      toast.error("Name should only contain letters, spaces, hyphens, or apostrophes.");
      return false;
    }

    if (!subjectRegex.test(data.subject)) {
      toast.error("Subject contains invalid characters.");
      return false;
    }

    if (data.phone_number && !phoneRegex.test(data.phone_number)) {
      toast.error("Phone number format is invalid.");
      return false;
    }

    if (!data.message.trim()) {
      toast.error("Message cannot be empty.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm(formData)) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    const toastId = toast.loading("Sending message...");

    try {
      await axios.post('/api/send-email', {
        to: 'victorekeocha016@gmail.com',
        subject: formData.subject,
        html: `
          <div>
            <p><strong>Name:</strong> ${formData.from_name}</p>
            <p><strong>Email:</strong> ${formData.from_email}</p>
            <p><strong>Phone:</strong> ${formData.phone_number}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          </div>
        `,
      });

      toast.success("Message sent successfully!", { id: toastId });
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      toast.error("Failed to send. Please try again.", { id: toastId });
      setSubmitStatus('error');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { label: 'Phone', value: '+234 703 3020 609', href: 'tel:+2347033020608' },
    { label: 'Email', value: 'info@aynadatasolutions.com', href: 'mailto:info@aynadatasolutions.com' },
  ];

  return (
    <section id="contact-page" className="min-h-screen flex items-center bg-data-dark-bg py-40 md:py-52">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 md:gap-16 items-start">
          <AnimatedWrapper variants={fadeInLeft} className="lg:col-span-4 space-y-8">
            <motion.h1
              variants={fadeInUp(0.6)}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main font-heading leading-none tracking-tighter"
            >
              Let's get <br /> in touch
            </motion.h1>

            <motion.p variants={fadeInUp(0.6, 0.1)} className="text-xl sm:text-2xl font-medium text-data-text-muted">
              Share your Data concerns with us!
            </motion.p>

            <motion.div variants={fadeInUp(0.6, 0.2)} className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs text-data-text-muted uppercase tracking-wider">{detail.label}</p>
                  <a href={detail.href} className="text-md sm:text-lg text-data-text-main hover:text-primary transition-colors">
                    {detail.value}
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatedWrapper>

          <AnimatedWrapper
            variants={fadeInRight}
            className="lg:col-span-6 bg-data-text-main text-data-dark-bg p-8 sm:p-10 md:p-12 rounded-form-card shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-8">Contact</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="name" value={formData.from_name} />
              <input type="hidden" name="title" value={formData.subject} />
              <input type="hidden" name="current_year" value={year.toString()} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  pattern="[A-Za-z\s\-']+"
                  title="Name should only contain letters and spaces"
                  whileFocus={{ scale: 1.02 }}
                  className="form-input w-full p-3 border border-gray-300 rounded-md"
                />
                <motion.input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="form-input w-full p-3 border border-gray-300 rounded-md"
                />
                <motion.input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone"
                  value={formData.phone_number}
                  onChange={handleChange}
                  pattern="[0-9+\-\s()]{6,20}"
                  title="Enter a valid phone number"
                  whileFocus={{ scale: 1.02 }}
                  className="form-input w-full p-3 border border-gray-300 rounded-md"
                />
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  pattern="[A-Za-z0-9\s\-.,!?']+"
                  title="Subject should not contain symbols like @, #, $, etc."
                  whileFocus={{ scale: 1.02 }}
                  className="form-input w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <motion.textarea
                name="message"
                placeholder="Tell us about what you are interested in"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                whileFocus={{ scale: 1.02 }}
                className="form-input w-full p-3 border border-gray-300 rounded-md resize-vertical"
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-yellow hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-data-dark-bg font-bold py-3.5 px-6 rounded-md flex items-center justify-center text-md"
              >
                {isSubmitting && <FiLoader className="animate-spin mr-2 w-5 h-5" />}
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </motion.button>
            </form>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
