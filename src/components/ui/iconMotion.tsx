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
}

export default function IconMotion({ src, alt, width, height, toolTip, className }: IconMotionProps ) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
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