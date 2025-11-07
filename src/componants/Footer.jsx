import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const handleContactClick = () => {
        window.open('https://wa.me/+201554102196');
    };

    const handlePhoneClick = (phone) => {
        window.open(`tel:+${phone}`);
    };

    return (
        <footer id="contact" className="footer-section">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="contact-info">
                        <h3 className="contact-title">{t('contact')}</h3>
                        <div className="contact-item" onClick={() => handlePhoneClick(+201554102196)}>
                            <span className="contact-icon">📞</span>
                            <span className="contact-text">+2015-5410-2196</span>
                        </div>
                        <div className="contact-item" onClick={() => handlePhoneClick(+201150390913)}>
                            <span className="contact-icon">📞</span>
                            <span className="contact-text">+2011-5039-0913</span>
                        </div>
                    </div>

                    <div className="contact-button-section">
                        <button onClick={handleContactClick} className="contact-me-btn">
                            {t('orderViaWhatsapp')}
                        </button>
                    </div>

                    <div className="social-copyright">
                        <div className="social-icons">

                            <a
                                target='_blank'
                                href="https://www.facebook.com/share/1JuHy7WJ1b/"
                                className="social-icon"
                                aria-label="Facebook"
                            >
                                <span className="facebook-icon">f</span>
                            </a>
                            <a
                                target='_blank'
                                href="https://www.instagram.com/sahir_offacc?igsh=MWlpYTU1d25nNjM3Ng=="
                                className="social-icon"
                                aria-label="Instagram"
                            >
                                <span className="instagram-icon">IN</span>
                            </a>
                        </div>

                        <div className="social-copyright">
                            <div className="social-icons">
                                <span className="copyright text-center">
                                    © {t('year')} . {t('copyright')} <br />
                                    <a href="https://www.linkedin.com/in/saeed-ebrahim-26b898371/" target='_blank' >
                                        {t('developer')} {t('engineer')} {t('saeed')}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;