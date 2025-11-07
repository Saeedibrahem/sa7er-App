import React, { useState } from 'react';
import { motion } from 'framer-motion';
import prod1 from '../assets/img/prod1.jpg';
import prod2 from '../assets/img/prod2.jpg';
import { useTranslation } from 'react-i18next';

const MainSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const { t } = useTranslation();
    const portfolioProjects = [
        {
            id: 1,
            title: t('products.product1.title'),
            category: t('products.product1.category'),
            description: t('products.product1.description'),
            image: prod1,
            technologies: [t('products.product1.tech1'), t('products.product1.tech2'), t('products.product1.tech3')],
        },
        {
            id: 2,
            title: t('products.product2.title'),
            category: t('products.product2.category'),
            description: t('products.product2.description'),
            image: prod2,
            technologies: [t('products.product2.tech1'), t('products.product2.tech2'), t('products.product2.tech3')],
        },
        {
            id: 3,
            title: t('products.product3.title'),
            category: t('products.product3.category'),
            description: t('products.product3.description'),
            image: prod1,
            technologies: [t('products.product3.tech1'), t('products.product3.tech2'), t('products.product3.tech3')],
        },
        {
            id: 4,
            title: t('products.product4.title'),
            category: t('products.product4.category'),
            description: t('products.product4.description'),
            image: prod2,
            technologies: [t('products.product4.tech1'), t('products.product4.tech2'), t('products.product4.tech3')],
        },
        {
            id: 5,
            title: t('products.product5.title'),
            category: t('products.product5.category'),
            description: t('products.product5.description'),
            image: prod1,
            technologies: [t('products.product5.tech1'), t('products.product5.tech2'), t('products.product5.tech3')],
        },
        {
            id: 6,
            title: t('products.product6.title'),
            category: t('products.product6.category'),
            description: t('products.product6.description'),
            image: prod2,
            technologies: [t('products.product6.tech1'), t('products.product6.tech2'), t('products.product6.tech3')],
        }
    ];

    const handleProjectClick = (product) => {
        if (product !== '#') {
            const message = `${t('products.whatsappMessage')}" ${product.title}"`;
            window.open(`https://wa.me/+201554102196?text=${encodeURIComponent(message)}`, '_blank');
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
                    <h1 className="portfolio-title">{t('products.title')}</h1>
                    <p className="portfolio-subtitle">
                        {t('products.subtitle')}
                    </p>
                </motion.div>

                <div className="portfolio-grid">
                    {portfolioProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`portfolio-card ${index % 2 === 0 ? 'light-card' : 'dark-card'}`}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleProjectClick(project)}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.08 }}
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div className="card-image" whileHover={{ scale: 1.02 }} transition={{ duration: 0.25 }}>
                                <div className="placeholder-image">
                                    <img src={project.image} alt={project.title} />
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
                                        {t('products.orderNow')}
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