import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const skillsRef = useRef(null);

    const focusAreas = [
        'تركيز عالٍ وثبات يدوم',
        'خلاصات عطرية فاخرة',
        'روائح عربية وعالمية',
        'تعبئة أنيقة للهدايا',
        'شحن سريع لجميع المحافظات',
        'ضمان استرجاع خلال 14 يومًا'
    ];

    const technicalSkills = [
        { name: 'ثبات الرائحة', percentage: 95 },
        { name: 'فخامة المكونات', percentage: 92 },
        { name: 'تناغم النفحات', percentage: 90 },
        { name: 'جاذبية الرائحة', percentage: 93 },
        { name: 'جودة العبوة', percentage: 88 },
        { name: 'رضا العملاء', percentage: 96 }
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
                    <motion.h1 className="skills-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>لماذا تختار ساحر؟</motion.h1>
                    <motion.p className="skills-intro" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                        نقدم لك تجربة عطرية فاخرة تجمع بين الجودة العالية، الثبات الطويل، والتغليف الأنيق.
                        اختر من تشكيلتنا ما يناسب شخصيتك، وتمتع برائحة لا تُنسى.
                    </motion.p>

                    <div className="skills-grid">
                        <motion.div className="focus-section" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h3 className="focus-title">مميزاتنا</h3>
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

                        <motion.div className="technical-skills" ref={skillsRef} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h3 className="technical-title">TECHNICAL SKILLS</h3>
                            <div className="skills-list">
                                {technicalSkills.map((skill, index) => (
                                    <motion.div key={index} className="skill-item" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.percentage}%</span>
                                        </div>
                                        <div className="progress-container">
                                            <motion.div
                                                className="progress-bar"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillsSection;
