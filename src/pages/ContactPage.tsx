// src/pages/ContactPage.tsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { AnimatedWrapper } from '../components/AnimatedWrapper';
import { fadeInUp, fadeInLeft, fadeInRight } from '../components/animations/variants';
import { FiLoader } from 'react-icons/fi';
import toast from 'react-hot-toast';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

interface FormData {
  from_first_name: string;
  from_last_name: string;
  from_work_email: string;
  from_job_title: string;
  from_company_name: string;
  from_job_function: string;
  from_country: string;
  phone_number: string;
  message: string;
}

const initialFormData: FormData = {
  from_company_name: '',
  from_country: '',
  from_first_name: '',
  from_job_function: '',
  from_job_title: '',
  from_last_name: '',
  from_work_email: '',
  phone_number: '',
  message: '',
};

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const year = new Date().getFullYear();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (data: FormData) => {
    const nameRegex = /^[A-Za-z\s\-']+$/;
    const phoneRegex = /^[0-9+\-\s()]{6,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(data.from_first_name) || !nameRegex.test(data.from_last_name)) {
      toast.error('Name should contain only letters, spaces, hyphens, or apostrophes.');
      return false;
    }

    if (!emailRegex.test(data.from_work_email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    if (data.phone_number && !phoneRegex.test(data.phone_number)) {
      toast.error('Phone number format is invalid.');
      return false;
    }

    if (!data.message.trim()) {
      toast.error('Message cannot be empty.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      console.error('EmailJS .env variables are not configured for contact form!');
      toast.error('Sorry, the contact form is currently unavailable.');
      return;
    }

    if (!validateForm(formData)) return;

    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');

    try {
      if (!form.current) throw new Error('Form ref not found.');

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID);
      setFormData(initialFormData);
      toast.success('Message sent successfully!', { id: toastId });
    } catch (error) {
      console.error('EmailJS FAILED...', error);
      toast.error('Oops! Something went wrong.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

    const contactDetails = [
    // { label: 'Phone', value: '+234 703 3020 609', href: 'tel:+2347033020608' },
    { label: 'Email', value: 'info@aynadatasolutions.com', href: 'mailto:info@aynadatasolutions.com' },
    // { label: 'Office', value: '14B, Kafayat Abdulrasaq Street, Lekki Phase 1' },
  ];

  return (
    <section className="min-h-screen flex items-center bg-data-dark-bg py-40 md:py-52">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 md:gap-16 items-start">
          <AnimatedWrapper variants={fadeInLeft} className="lg:col-span-4 space-y-8">
            <motion.h1
              variants={fadeInUp(0.6)}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main font-heading"
            >
              Let's get <br /> in touch
            </motion.h1>
            <motion.p variants={fadeInUp(0.6, 0.1)} className="text-xl font-medium text-data-text-muted">
              Share your Data concerns with us!
            </motion.p>

             {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs text-data-text-muted uppercase tracking-wider">{detail.label}</p>
                  {detail.href ? (
                    <a href={detail.href} className="text-md sm:text-lg text-data-text-main hover:text-primary transition-colors">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-md sm:text-lg text-data-text-main">{detail.value}</p>
                  )}
                </div>
              ))}
          </AnimatedWrapper>

          <AnimatedWrapper
            variants={fadeInRight}
            className="lg:col-span-6 bg-white text-black p-8 sm:p-10 md:p-12 rounded-md shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-8">Contact</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="name" value={`${formData.from_first_name} ${formData.from_last_name}`} />
              <input type="hidden" name="current_year" value={year.toString()} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: 'from_first_name', placeholder: 'First Name' },
                  { name: 'from_last_name', placeholder: 'Last Name' },
                  { name: 'from_work_email', placeholder: 'Work Email', type: 'email' },
                  { name: 'from_job_title', placeholder: 'Job Title' },
                  { name: 'from_company_name', placeholder: 'Company Name' },
                  { name: 'from_job_function', placeholder: 'Job Function' },
                  { name: 'from_country', placeholder: 'Country' },
                  { name: 'phone_number', placeholder: 'Phone', type: 'tel' },
                ].map(({ name, placeholder, type = 'text' }) => (
                  <motion.input
                    key={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={(formData as any)[name]}
                    onChange={handleChange}
                    required={name !== 'phone_number'}
                    whileFocus={{ scale: 1.02 }}
                    className="form-input w-full p-3 border border-gray-300 rounded-md"
                  />
                ))}
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
                className="w-full bg-brand-yellow hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-bold py-3.5 px-6 rounded-md flex items-center justify-center text-md"
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
