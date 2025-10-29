import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ heroImage }) => {
    const handleContactClick = () => {
        window.open("https://wa.me/+201554102196");
    };

    const handleDownloadResume = () => {
        window.open("https://wa.me/+201554102196");
    };

    return (
        <div className="hero-section">
            <motion.div 
                id="home" 
                className="hero-portrait-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div
                    className="hero-background"
                    style={{ backgroundImage: `url(${heroImage})` }}
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
                                ساحر
                            </motion.h1>
                            <motion.p className="hero-profession" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                                Saher – Perfume for Men
                            </motion.p>
                            <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                                عطور رجالية فاخرة بثبات يدوم
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
                                تسوق الآن
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
                            <h1 className="about-title">عن ساحر</h1>
                            <p className="about-tagline">ساحر – لأن كل عطر يحكي قصة رجل</p>
                        </motion.div>
                        <motion.div className="about-text-section" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                            <div className="about-content">
                                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                                    في ساحر نقدم تشكيلة مختارة من العطور الرجالية الفاخرة بتركيز عالٍ وثبات طويل. نصمم روائح تجمع بين الأصالة العربية والفخامة العالمية لتناسب ذوق الرجل العصري.
                                </motion.p>
                                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                                    كل عطر من ساحر يُمزج بعناية ليمنحك حضورًا طاغيًا يدوم طوال اليوم. اختر عطرك المفضل من تشكيلة متنوعة تناسب كل مناسبة.
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
