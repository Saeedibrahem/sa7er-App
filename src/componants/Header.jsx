import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/img/logo.png";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // إغلاق القائمة المتنقلة عند النقر على أي عنصر
        setIsMobileMenuOpen(false);
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
                            { id: 'home', text: 'الرئيسية' },
                            { id: 'about', text: 'عن المتجر' },
                            { id: 'features', text: 'المميزات' },
                            { id: 'portfolio', text: 'التشكيلة' },
                            { id: 'testimonials', text: 'آراء العملاء' },
                            { id: 'contact', text: 'تواصل معنا' }
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
            </div>
        </motion.header>
    );
};

export default Header