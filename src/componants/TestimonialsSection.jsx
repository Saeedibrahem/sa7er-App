import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TestimonialsSection = () => {
    const { t } = useTranslation();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: t('testimonials.testimonial1.name'),
            location: t('testimonials.testimonial1.location'),
            text: t('testimonials.testimonial1.text'),
            rating: 5
        },
        {
            id: 2,
            name: t('testimonials.testimonial2.name'),
            location: t('testimonials.testimonial2.location'),
            text: t('testimonials.testimonial2.text'),
            rating: 5
        },
        {
            id: 3,
            name: t('testimonials.testimonial3.name'),
            location: t('testimonials.testimonial3.location'),
            text: t('testimonials.testimonial3.text'),
            rating: 5
        },
        {
            id: 4,
            name: t('testimonials.testimonial4.name'),
            location: t('testimonials.testimonial4.location'),
            text: t('testimonials.testimonial4.text'),
            rating: 5
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <motion.div 
            id="testimonials" 
            className="testimonials-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <div className="testimonials-container">
                <motion.div 
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="testimonials-title">{t('testimonials.title')}</h1>
                    <p className="testimonials-subtitle">
                        {t('testimonials.subtitle')}
                    </p>
                </motion.div>

                <motion.div 
                    className="testimonials-content"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentTestimonial}
                            className="testimonial-card"
                            initial={{ opacity: 0, scale: 0.96, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -12 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                        >
                            <motion.div className="testimonial-rating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                                    <motion.span key={index} className="star" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + index * 0.05 }}>
                                        ★
                                    </motion.span>
                                ))}
                            </motion.div>
                            
                            <motion.blockquote className="testimonial-text" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                "{testimonials[currentTestimonial].text}"
                            </motion.blockquote>
                            
                            <motion.div className="testimonial-author" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                                <p className="author-location">{testimonials[currentTestimonial].location}</p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div className="testimonial-controls" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <motion.button className="testimonial-btn prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>‹</motion.button>
                        
                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => setCurrentTestimonial(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.85 }}
                                />
                            ))}
                        </div>
                        
                        <motion.button className="testimonial-btn next-btn" onClick={nextTestimonial} aria-label="Next testimonial" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>›</motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TestimonialsSection;
