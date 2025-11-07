import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SkillsSection = () => {
    const skillsRef = useRef(null);
    const { t } = useTranslation();

    const focusAreas = [
        t('features.feature1'),
        t('features.feature2'),
        t('features.feature3'),
        t('features.feature4'),
        t('features.feature5'),
        t('features.feature6')
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            const skillBars = skillsRef.current.querySelectorAll('.progress-bar');
            skillBars.forEach((bar) => observer.observe(bar));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div 
            id="features" 
            className="skills-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <div className="skills-container">
                <motion.div 
                    className="skills-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1 className="skills-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>{t('features.title')}</motion.h1>
                    <motion.p className="skills-intro" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                        {t('features.intro')}
                    </motion.p>

                    <div className="skills-grid">
                        <motion.div className="focus-section" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h3 className="focus-title">{t('features.featuresTitle')}</h3>
                            <div className="focus-line"></div>
                            <ul className="focus-list">
                                {focusAreas.map((area, index) => (
                                    <motion.li key={index} className="focus-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}>
                                        <span className="focus-icon">→</span>
                                        {area}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillsSection;
