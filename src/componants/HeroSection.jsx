import React from "react";

const HeroSection = ({ heroImage }) => {
    const handleContactClick = () => {
        window.open("https://wa.me/+201150390913");
    };

    const handleDownloadResume = () => {
        window.open("https://wa.me/+201150390913");
    };

    return (
        <div className="hero-section">
            <div id="home" className="hero-portrait-section">
                <div
                    className="hero-background"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <h1 className="hero-name">ساحر</h1>
                            <p className="hero-profession">Saher – Perfume for Men</p>
                            <p className="hero-subtitle">عطور رجالية فاخرة بثبات يدوم</p>
                            <button className="contact-me-btn" onClick={handleContactClick}>
                                تسوق الآن
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div id="about" className="about-section">
                <div className="about-container">
                    <div className="about-content-wrapper">
                        <div className="about-title-section">
                            <h1 className="about-title">عن ساحر</h1>
                            <p className="about-tagline">ساحر – لأن كل عطر يحكي قصة رجل</p>
                        </div>
                        <div className="about-text-section">
                            <div className="about-content">
                                <p>
                                    في ساحر نقدم تشكيلة مختارة من العطور الرجالية الفاخرة بتركيز عالٍ وثبات طويل. نصمم روائح تجمع بين الأصالة العربية والفخامة العالمية لتناسب ذوق الرجل العصري.
                                </p>
                                <p>
                                    كل عطر من ساحر يُمزج بعناية ليمنحك حضورًا طاغيًا يدوم طوال اليوم. اختر عطرك المفضل من تشكيلة متنوعة تناسب كل مناسبة.
                                </p>
                                <button
                                    className="download-resume-btn"
                                    onClick={handleDownloadResume}
                                >
                                    تواصل عبر واتساب
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
