import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    const floatingElements = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {floatingElements.map((element) => (
                <motion.div
                    key={element.id}
                    className="absolute opacity-10"
                    style={{
                        width: element.size,
                        height: element.size,
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                        background: 'linear-gradient(135deg, #6c4129, #8b4513)',
                        borderRadius: '50%',
                        filter: 'blur(1px)'
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: element.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: element.delay
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;

