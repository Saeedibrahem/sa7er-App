import React, { useState, useEffect } from 'react';

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

    return (
        <div id="testimonials" className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h1 className="testimonials-title">آراء عملائنا</h1>
                    <p className="testimonials-subtitle">
                        اكتشف ما يقوله عملاؤنا عن تجربتهم مع عطور ساحر
                    </p>
                </div>

                <div className="testimonials-content">
                    <div className="testimonial-card">
                        <div className="testimonial-rating">
                            {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                        </div>
                        
                        <blockquote className="testimonial-text">
                            "{testimonials[currentTestimonial].text}"
                        </blockquote>
                        
                        <div className="testimonial-author">
                            <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                            <p className="author-location">{testimonials[currentTestimonial].location}</p>
                        </div>
                    </div>

                    <div className="testimonial-controls">
                        <button 
                            className="testimonial-btn prev-btn" 
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                        >
                            ‹
                        </button>
                        
                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => setCurrentTestimonial(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        <button 
                            className="testimonial-btn next-btn" 
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
