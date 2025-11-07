import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/img/logo.png";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper function to update page direction
    const updatePageDirection = useCallback((lang) => {
        const direction = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = direction;
        document.documentElement.lang = lang;
        document.body.dir = direction;
        document.body.style.direction = direction;
    }, []);

    // Set initial language direction on mount and when language changes
    useEffect(() => {
        const currentLang = i18n.language || 'ar';
        updatePageDirection(currentLang);
    }, [i18n.language, updatePageDirection]);

    // Listen to language changes
    useEffect(() => {
        const handleLanguageChange = (lng) => {
            updatePageDirection(lng);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n, updatePageDirection]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        // Update direction immediately before language change
        updatePageDirection(newLang);
        // Change language (this will trigger the useEffect and event listener)
        i18n.changeLanguage(newLang);
    };

    const navVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <motion.header 
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="header-container">
                <motion.div 
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => scrollToSection('home')}
                >
                    <div className="logo-container">
                        <motion.img 
                            src={logo} 
                            alt="ساحر لوجو" 
                            className="logo-img"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.3 }
                            }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        
                    </div>
                </motion.div>
                
                <motion.nav 
                    className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <ul className="nav-list">
                        {[
                            { id: 'home', text: t('home') },
                            { id: 'about', text: t('about') },
                            { id: 'portfolio', text: t('collection') },
                            { id: 'features', text: t('feature') },
                            { id: 'contact', text: t('contact') },
                        ].map((item) => (
                            <motion.li 
                                key={item.id}
                                className="nav-item"
                                variants={navItemVariants}
                            >
                                <motion.button 
                                    className="nav-link" 
                                    onClick={() => scrollToSection(item.id)}
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.text}
                                </motion.button>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>

                <motion.div 
                    className="header-actions"
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                    {/* Language Switcher */}
                    <motion.button
                        className="language-switcher"
                        onClick={toggleLanguage}
                        aria-label="Change language"
                        whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(108, 65, 41, 0.2)',
                            borderColor: 'rgba(108, 65, 41, 0.5)'
                        }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            background: 'rgba(108, 65, 41, 0.1)',
                            border: '2px solid rgba(108, 65, 41, 0.3)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#6c4129',
                            fontSize: '16px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        {i18n.language === 'ar' ? 'EN' : 'AR'}
                    </motion.button>

                    <motion.button 
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <motion.span
                        animate={{ 
                            rotate: isMobileMenuOpen ? 45 : 0,
                            y: isMobileMenuOpen ? 6 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    ></motion.span>
                    <motion.span
                        animate={{ 
                            opacity: isMobileMenuOpen ? 0 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    ></motion.span>
                    <motion.span
                        animate={{ 
                            rotate: isMobileMenuOpen ? -45 : 0,
                            y: isMobileMenuOpen ? -6 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    ></motion.span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default Header