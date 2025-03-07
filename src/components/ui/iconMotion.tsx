'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// prop for image src
interface IconMotionProps {
    className?: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    toolTip: string;
    yCord?: number[];
}

export default function IconMotion({ src, alt, width, height, toolTip, className, yCord }: IconMotionProps ) {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [tooltipText, setTooltipText] = useState(toolTip);

    // remove tooltip after 3 seconds
    useEffect(() => {
        if (isTooltipVisible) {
            setTimeout(() => {
                setIsTooltipVisible(false);
            }, 3000);
        }
    }, [isTooltipVisible]);
    return (
        <motion.button
            className={className}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9 }}
            animate={{
                scale: [1, 1.05],
                transition: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                },
                x: 0,
                y: yCord
            }}
        >
            <Image 
                src={src} 
                alt={alt} 
                width={width}
                height={height}
                onClick={() => {
                    setIsTooltipVisible(!isTooltipVisible);
                    setTooltipText(toolTip);
                }}
            />
            {isTooltipVisible && tooltipText && (
                <p className="text-xs text-gray-500">{tooltipText}</p>
            )}
        </motion.button>
    );
}