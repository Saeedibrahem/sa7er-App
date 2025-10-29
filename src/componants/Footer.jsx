import React from 'react';

const Footer = () => {
    const handleContactClick = () => {
        window.open('https://wa.me/+201150390913');
    };

    const handleEmailClick = () => {
        window.open('mailto:s3eedeb@gmail.com');
    };

    const handlePhoneClick = () => {
        window.open('tel:+201150390913');
    };

    return (
        <footer id="contact" className="footer-section">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="contact-info">
                        <h3 className="contact-title">تواصل معنا</h3>
                        <div className="contact-item" onClick={handleEmailClick}>
                            <span className="contact-icon">✉</span>
                            <span className="contact-text">s3eedeb@gmail.com</span>
                        </div>
                        <div className="contact-item" onClick={handlePhoneClick}>
                            <span className="contact-icon">📞</span>
                            <span className="contact-text">011-5039-0913</span>
                        </div>
                    </div>

                    <div className="contact-button-section">
                        <button onClick={handleContactClick} className="contact-me-btn">
                            اطلب عبر واتساب
                        </button>
                    </div>

                    <div className="social-copyright">
                        <div className="social-icons">
                            <a 
                                target='_blank' 
                                href="https://www.linkedin.com/in/saeed-ebrahim-26b898371/" 
                                className="social-icon" 
                                aria-label="LinkedIn"
                            >
                                <span className="linkedin-icon">in</span>
                            </a>
                            <a 
                                target='_blank' 
                                href="https://www.facebook.com/SSEe3aAA" 
                                className="social-icon" 
                                aria-label="Facebook"
                            >
                                <span className="facebook-icon">f</span>
                            </a>
                            <a 
                                target='_blank' 
                                href="https://github.com/saeedibrahem" 
                                className="social-icon" 
                                aria-label="GitHub"
                            >
                                <span className="github-icon">GH</span>
                            </a>
                        </div>
                        <div className="copyright">
                            © 2025 ساحر. جميع الحقوق محفوظة.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;