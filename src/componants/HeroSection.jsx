import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = ({ heroImage }) => {
    const handleContactClick = () => {
        window.open("https://wa.me/+201150390913");
    };

    const handleDownloadResume = () => {
        window.open("https://wa.me/+201150390913");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
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

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(108, 65, 41, 0.4)",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 60]);
    const bgScale = useTransform(scrollY, [0, 300], [1, 1.08]);

    return (
        <div className="hero-section">
            <div id="home" className="hero-portrait-section">
                <motion.div
                    className="hero-background"
                    style={{ backgroundImage: `url(${heroImage})` }}
                    initial={{ scale: 1.05 }}
                    style={{ backgroundImage: `url(${heroImage})`, scale: bgScale }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.div className="hero-overlay" style={{ y }}>
                        <motion.div 
                            className="hero-content"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h1 
                                className="hero-name"
                                variants={itemVariants}
                            >
                                ساحر
                            </motion.h1>
                            <motion.p 
                                className="hero-profession"
                                variants={itemVariants}
                            >
                                Saher – Perfume for Men
                            </motion.p>
                            <motion.p 
                                className="hero-subtitle"
                                variants={itemVariants}
                            >
                                عطور رجالية فاخرة بثبات يدوم
                            </motion.p>
                            <motion.button 
                                className="contact-me-btn" 
                                onClick={handleContactClick}
                                variants={itemVariants}
                                whileHover="hover"
                                whileTap="tap"
                                variants={buttonVariants}
                            >
                                تسوق الآن
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* About Me Section */}
            <motion.div 
                id="about" 
                className="about-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="about-container">
                    <div className="about-content-wrapper">
                        <motion.div 
                            className="about-title-section"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className="about-title">عن ساحر</h1>
                            <motion.p 
                                className="about-tagline"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                ساحر – لأن كل عطر يحكي قصة رجل
                            </motion.p>
                        </motion.div>
                        <motion.div 
                            className="about-text-section"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="about-content">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    في ساحر نقدم تشكيلة مختارة من العطور الرجالية الفاخرة بتركيز عالٍ وثبات طويل. نصمم روائح تجمع بين الأصالة العربية والفخامة العالمية لتناسب ذوق الرجل العصري.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    كل عطر من ساحر يُمزج بعناية ليمنحك حضورًا طاغيًا يدوم طوال اليوم. اختر عطرك المفضل من تشكيلة متنوعة تناسب كل مناسبة.
                                </motion.p>
                                <motion.button
                                    className="download-resume-btn"
                                    onClick={handleDownloadResume}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 8px 25px rgba(108, 65, 41, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    تواصل عبر واتساب
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
