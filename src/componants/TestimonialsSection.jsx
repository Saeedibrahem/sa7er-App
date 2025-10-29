import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'أحمد محمد',
            location: 'القاهرة',
            text: 'عطور ساحر بجد فاخرة وثباتها قوي جداً. كل عطر له شخصيته المميزة. أنصح بيهم بشدة!',
            rating: 5
        },
        {
            id: 2,
            name: 'محمد علي',
            location: 'الإسكندرية',
            text: 'جودة ممتازة وأسعار مناسبة. التغليف أنيق والشحن سريع. سأطلب مرة تانية أكيد.',
            rating: 5
        },
        {
            id: 3,
            name: 'خالد أحمد',
            location: 'الرياض',
            text: 'أفضل عطور رجالية جربتها. الرائحة تدوم طوال اليوم والتركيز عالي جداً.',
            rating: 5
        },
        {
            id: 4,
            name: 'عبدالله سعد',
            location: 'دبي',
            text: 'خدمة عملاء ممتازة ونصائح مفيدة لاختيار العطر المناسب. شكراً لكم!',
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.3
            }
        }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    return (
        <motion.div 
            id="testimonials" 
            className="testimonials-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="testimonials-container">
                <motion.div 
                    className="testimonials-header"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h1 
                        className="testimonials-title"
                        variants={containerVariants}
                    >
                        آراء عملائنا
                    </motion.h1>
                    <motion.p 
                        className="testimonials-subtitle"
                        variants={containerVariants}
                    >
                        اكتشف ما يقوله عملاؤنا عن تجربتهم مع عطور ساحر
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="testimonials-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentTestimonial}
                            className="testimonial-card"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            custom={1}
                        >
                            <motion.div 
                                className="testimonial-rating"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                                    <motion.span 
                                        key={index} 
                                        className="star"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            duration: 0.3, 
                                            delay: 0.3 + index * 0.1 
                                        }}
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </motion.div>
                            
                            <motion.blockquote 
                                className="testimonial-text"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                "{testimonials[currentTestimonial].text}"
                            </motion.blockquote>
                            
                            <motion.div 
                                className="testimonial-author"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                                <p className="author-location">{testimonials[currentTestimonial].location}</p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div 
                        className="testimonial-controls"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.button 
                            className="testimonial-btn prev-btn" 
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ‹
                        </motion.button>
                        
                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => setCurrentTestimonial(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            ))}
                        </div>
                        
                        <motion.button 
                            className="testimonial-btn next-btn" 
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ›
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TestimonialsSection;
