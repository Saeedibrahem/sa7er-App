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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const progressVariants = {
        hidden: { width: 0 },
        visible: (percentage) => ({
            width: `${percentage}%`,
            transition: {
                duration: 1.5,
                ease: "easeOut",
                delay: 0.5
            }
        })
    };

    return (
        <motion.div 
            id="features" 
            className="skills-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="skills-container">
                <motion.div 
                    className="skills-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h1 
                        className="skills-title"
                        variants={itemVariants}
                    >
                        لماذا تختار ساحر؟
                    </motion.h1>
                    <motion.p 
                        className="skills-intro"
                        variants={itemVariants}
                    >
                        نقدم لك تجربة عطرية فاخرة تجمع بين الجودة العالية، الثبات الطويل، والتغليف الأنيق.
                        اختر من تشكيلتنا ما يناسب شخصيتك، وتمتع برائحة لا تُنسى.
                    </motion.p>

                    <div className="skills-grid">
                        <motion.div 
                            className="focus-section"
                            variants={itemVariants}
                        >
                            <h3 className="focus-title">مميزاتنا</h3>
                            <div className="focus-line"></div>
                            <ul className="focus-list">
                                {focusAreas.map((area, index) => (
                                    <motion.li 
                                        key={index} 
                                        className="focus-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ 
                                            x: 10,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <span className="focus-icon">→</span>
                                        {area}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div 
                            className="technical-skills" 
                            ref={skillsRef}
                            variants={itemVariants}
                        >
                            <h3 className="technical-title">مؤشرات الجودة</h3>
                            <div className="skills-list">
                                {technicalSkills.map((skill, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="skill-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ 
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.percentage}%</span>
                                        </div>
                                        <div className="progress-container">
                                            <motion.div
                                                className="progress-bar"
                                                variants={progressVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                custom={skill.percentage}
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
