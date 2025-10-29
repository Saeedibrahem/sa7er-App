import React, { useEffect, useRef } from 'react';

const SkillsSection = () => {
    const skillsRef = useRef(null);

    const focusAreas = [
        'تركيز عالٍ وثبات يدوم',
        'خلاصات عطرية فاخرة',
        'روائح عربية وعالمية',
        'تعبئة أنيقة للهدايا',
        'شحن سريع لجميع المحافظات',
        'ضمان استرجاع خلال 14 يومًا'
    ];

    const technicalSkills = [
        { name: 'ثبات الرائحة', percentage: 95 },
        { name: 'فخامة المكونات', percentage: 92 },
        { name: 'تناغم النفحات', percentage: 90 },
        { name: 'جاذبية الرائحة', percentage: 93 },
        { name: 'جودة العبوة', percentage: 88 },
        { name: 'رضا العملاء', percentage: 96 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            const skillBars = skillsRef.current.querySelectorAll('.progress-bar');
            skillBars.forEach((bar) => observer.observe(bar));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div id="features" className="skills-section">
            <div className="skills-container">
                <div className="skills-content">
                    <h1 className="skills-title">لماذا تختار ساحر؟</h1>
                    <p className="skills-intro">
                        نقدم لك تجربة عطرية فاخرة تجمع بين الجودة العالية، الثبات الطويل، والتغليف الأنيق.
                        اختر من تشكيلتنا ما يناسب شخصيتك، وتمتع برائحة لا تُنسى.
                    </p>

                    <div className="skills-grid">
                        <div className="focus-section">
                            <h3 className="focus-title">مميزاتنا</h3>
                            <div className="focus-line"></div>
                            <ul className="focus-list">
                                {focusAreas.map((area, index) => (
                                    <li key={index} className="focus-item">
                                        <span className="focus-icon">→</span>
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="technical-skills" ref={skillsRef}>
                            <h3 className="technical-title">TECHNICAL SKILLS</h3>
                            <div className="skills-list">
                                {technicalSkills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.percentage}%</span>
                                        </div>
                                        <div className="progress-container">
                                            <div
                                                className="progress-bar"
                                                style={{ width: `${skill.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
