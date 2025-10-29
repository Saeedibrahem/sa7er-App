import React, { useState } from 'react';

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
        <div id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h1 className="portfolio-title">تشكيلة ساحر</h1>
                    <p className="portfolio-subtitle">
                        روائح مختارة بعناية تناسب ذوقك ومناسباتك المختلفة
                    </p>
                </div>
                
                <div className="portfolio-grid">
                    {portfolioProjects.map((project, index) => (
                        <div 
                            key={project.id}
                            className={`portfolio-card ${index % 2 === 0 ? 'light-card' : 'dark-card'}`}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleProjectClick(project.link)}
                        >
                            <div className="card-image">
                                <div className="placeholder-image">
                                    <span className="image-text">{project.category}</span>
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <div className="card-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                
                                <p className="project-description">{project.description}</p>
                                
                                <div className="technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                
                                <div className={`card-overlay ${hoveredCard === project.id ? 'active' : ''}`}>
                                    <button className="view-project-btn">
                                        اطلب الآن
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection