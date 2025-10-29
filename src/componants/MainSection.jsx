import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MainSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const portfolioProjects = [
        {
            id: 1,
            title: 'ساحر بلاك',
            category: 'عود ومسك',
            description: 'رائحة فاخرة داكنة بثبات عالٍ تناسب السهرات.',
            image: '/api/placeholder/400/300',
            technologies: ['ثبات قوي', 'تركيز عالي', '100 مل'],
            link: '#'
        },
        {
            id: 2,
            title: 'ساحر سيلفر',
            category: 'حمضي خشبي',
            description: 'انتعاش عصري ولمسة خشبية للنهار والعمل.',
            image: '/api/placeholder/400/300',
            technologies: ['انتعاش', 'تركيز عالي', '100 مل'],
            link: '#'
        },
        {
            id: 3,
            title: 'ساحر أزرق',
            category: 'بحري أروماتيك',
            description: 'إحساس بالحرية والهواء الطلق يدوم طويلاً.',
            image: '/api/placeholder/400/300',
            technologies: ['ثبات متوسط', 'تركيز عالي', '100 مل'],
            link: '#'
        },
        {
            id: 4,
            title: 'ساحر عود',
            category: 'عود شرقي',
            description: 'عمق شرقي دافئ بحضور قوي وفخم.',
            image: '/api/placeholder/400/300',
            technologies: ['فخامة', 'تركيز عالي', '100 مل'],
            link: '#'
        },
        {
            id: 5,
            title: 'ساحر كلاسيك',
            category: 'زهري خشبي',
            description: 'توقيع يومي أنيق يناسب كل المناسبات.',
            image: '/api/placeholder/400/300',
            technologies: ['توازن رائع', 'تركيز عالي', '100 مل'],
            link: '#'
        },
        {
            id: 6,
            title: 'ساحر بلاتينيوم',
            category: 'عنبر وفانيلا',
            description: 'دفء جذاب ولمسة حلوانية فاخرة.',
            image: '/api/placeholder/400/300',
            technologies: ['حضـور قوي', 'تركيز عالي', '100 مل'],
            link: '#'
        }
    ];

    const handleProjectClick = (link) => {
        if (link !== '#') {
            window.open(link, '_blank');
        }
    };

    return (
        <motion.div 
            id="portfolio" 
            className="portfolio-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <div className="portfolio-container">
                <motion.div 
                    className="portfolio-header"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="portfolio-title">تشكيلة ساحر</h1>
                    <p className="portfolio-subtitle">
                        روائح مختارة بعناية تناسب ذوقك ومناسباتك المختلفة
                    </p>
                </motion.div>
                
                <div className="portfolio-grid">
                    {portfolioProjects.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            className={`portfolio-card ${index % 2 === 0 ? 'light-card' : 'dark-card'}`}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleProjectClick(project.link)}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.08 }}
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div className="card-image" whileHover={{ scale: 1.02 }} transition={{ duration: 0.25 }}>
                                <div className="placeholder-image">
                                    <span className="image-text">{project.category}</span>
                                </div>
                            </motion.div>
                            
                            <div className="card-content">
                                <div className="card-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                
                                <p className="project-description">{project.description}</p>
                                
                                <div className="technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <motion.span 
                                            key={techIndex} 
                                            className="tech-tag"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.25, delay: techIndex * 0.05 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                
                                <motion.div 
                                    className={`card-overlay ${hoveredCard === project.id ? 'active' : ''}`}
                                    initial={false}
                                    animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <motion.button className="view-project-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        اطلب الآن
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default MainSection