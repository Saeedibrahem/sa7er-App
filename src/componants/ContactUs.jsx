import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
    });
    
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contactForm.nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contactForm.emailInvalid');
    }
    
    if (!formData.title.trim()) {
      newErrors.title = t('contactForm.subjectRequired');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contactForm.messageRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Update form fields with the time
      const form = formRef.current;
      const timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'time';
      timeInput.value = new Date().toLocaleString();
      form.appendChild(timeInput);

      // Send form using EmailJS
      
      // await emailjs.sendForm(
      //   'contact_service', // Replace with your service ID
      //   'contact_form',   // Replace with your template ID
      //   form
      // );
      const VITE_PUBLIC_SERVICE = import.meta.env.VITE_PUBLIC_SERVICE;
      const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
      const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
     await emailjs
      .sendForm(VITE_PUBLIC_SERVICE, VITE_TEMPLATE_ID, form, {
        publicKey: VITE_PUBLIC_KEY,
      })


      // Remove the temporary time input
      form.removeChild(timeInput);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        title: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      style={{
        padding: '6rem 0',
        background: 'var(--background-light)',
        minHeight: '100vh'
      }}
    >
      <div className="contact-container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title" style={{
            fontFamily: "'Noto Kufi Arabic', 'Cairo', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text-color)',
            textAlign: 'center',
            marginBottom: '3rem',
            textShadow: '2px 2px 4px rgba(108, 65, 41, 0.1)'
          }}>
            {t('contact')}
          </h2>
        </motion.div>

        <motion.form
          ref={formRef}
          id="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-form"
          style={{
            background: 'var(--white)',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            borderRadius: 'var(--border-radius)',
            boxShadow: 'var(--shadow)',
            border: '1px solid rgba(108, 65, 41, 0.1)',
            width: '100%'
          }}
        >
          {/* Name Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-color)',
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              {t('contactForm.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                border: `2px solid ${errors.name ? '#e74c3c' : 'rgba(108, 65, 41, 0.2)'}`,
                borderRadius: '10px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                color: 'var(--text-color)',
                background: 'var(--white)',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--primary-color)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.name ? '#e74c3c' : 'rgba(108, 65, 41, 0.2)';
              }}
            />
            {errors.name && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  color: '#e74c3c',
                  fontSize: '0.875rem',
                  marginTop: '0.25rem',
                  display: 'block'
                }}
              >
                {errors.name}
              </motion.span>
            )}
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-color)',
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              {t('contactForm.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                border: `2px solid ${errors.email ? '#e74c3c' : 'rgba(108, 65, 41, 0.2)'}`,
                borderRadius: '10px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                color: 'var(--text-color)',
                background: 'var(--white)',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--primary-color)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.email ? '#e74c3c' : 'rgba(108, 65, 41, 0.2)';
              }}
            />
            {errors.email && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  color: '#e74c3c',
                  fontSize: '0.875rem',
                  marginTop: '0.25rem',
                  display: 'block'
                }}
              >
                {errors.email}
              </motion.span>
            )}
          </div>

          {/* Subject Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="title"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-color)',
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              {t('contactForm.subject')}
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                border: `2px solid ${errors.title ? '#e74c3c' : 'rgba(108, 65, 41, 0.2)'}`,
                borderRadius: '10px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                color: 'var(--text-color)',
                background: 'var(--white)',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--primary-color)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.title ? '#e74c3c' : 'rgba(108, 65, 41, 0.2)';
              }}
            />
            {errors.title && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  color: '#e74c3c',
                  fontSize: '0.875rem',
                  marginTop: '0.25rem',
                  display: 'block'
                }}
              >
                {errors.title}
              </motion.span>
            )}
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '2rem' }}>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-color)',
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              {t('contactForm.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                border: `2px solid ${errors.message ? '#e74c3c' : 'rgba(108, 65, 41, 0.2)'}`,
                borderRadius: '10px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                color: 'var(--text-color)',
                background: 'var(--white)',
                transition: 'all 0.3s ease',
                outline: 'none',
                resize: 'vertical',
                minHeight: '120px'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--primary-color)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.message ? '#e74c3c' : 'rgba(108, 65, 41, 0.2)';
              }}
            />
            {errors.message && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  color: '#e74c3c',
                  fontSize: '0.875rem',
                  marginTop: '0.25rem',
                  display: 'block'
                }}
              >
                {errors.message}
              </motion.span>
            )}
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: '1rem',
                marginBottom: '1.5rem',
                background: '#d4edda',
                border: '1px solid #c3e6cb',
                borderRadius: '10px',
                color: '#155724',
                textAlign: 'center',
                fontWeight: 500
              }}
            >
              {t('contactForm.success')}
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: '1rem',
                marginBottom: '1.5rem',
                background: '#f8d7da',
                border: '1px solid #f5c6cb',
                borderRadius: '10px',
                color: '#721c24',
                textAlign: 'center',
                fontWeight: 500
              }}
            >
              {t('contactForm.error')}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              background: isSubmitting
                ? 'rgba(108, 65, 41, 0.6)'
                : 'linear-gradient(135deg, #6c4129 0%, #8b4513 100%)',
              border: 'none',
              color: '#ffffff',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              borderRadius: '50px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(108, 65, 41, 0.3)',
              fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif"
            }}
          >
            {isSubmitting ? t('contactForm.sending') : t('contactForm.send')}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default ContactUs;
