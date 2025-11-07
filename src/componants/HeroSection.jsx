import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const HeroSection = ({ heroImage }) => {
    const { t, i18n } = useTranslation();
    const handleContactClick = () => {
        window.open("https://wa.me/+201554102196");
    };

    const handleDownloadResume = () => {
        window.open("https://wa.me/+201554102196");
    };

    return (
        <div className="hero-section" >
            <motion.div
                id="home"
                className="hero-portrait-section"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div
                    className="hero-background"
                    style={{ 
                        backgroundImage: `url(${heroImage})`
                    }}
                >
                    <div className="hero-overlay">
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <motion.h1 className="hero-name" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                                {t('hero.brandName')}
                            </motion.h1>
                            <motion.p className="hero-profession" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                                {t('hero.tagline')}
                            </motion.p>
                            <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                                {t('hero.subtitle')}
                            </motion.p>
                            <motion.button
                                className="contact-me-btn"
                                onClick={handleContactClick}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.96 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {t('hero.shopNow')}
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* About Me Section */}
            <motion.div
                id="about"
                className="about-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="about-container">
                    <div className="about-content-wrapper">
                        <motion.div className="about-title-section" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h1 className="about-title">{t('hero.aboutTitle')}</h1>
                            <p className="about-tagline">{t('hero.aboutTagline')}</p>
                        </motion.div>
                        <motion.div className="about-text-section" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                            <div className="about-content">
                                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                                    {t('hero.aboutText1')}
                                </motion.p>
                                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                                    {t('hero.aboutText2')}
                                </motion.p>
                                <motion.button
                                    className="download-resume-btn"
                                    onClick={handleDownloadResume}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.96 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {t('hero.contactWhatsapp')}
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
