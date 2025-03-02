'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

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
            <Tooltip title={toolTip}>
                <Image 
                    src={src} 
                    alt={alt} 
                    width={width}
                    height={height}
                />
            </Tooltip>
        </motion.button>
    );
}