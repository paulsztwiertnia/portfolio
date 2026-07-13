'use client';

import { motion } from 'motion/react';

const JobTitle = () => {
  return (
    <div>
      <motion.div
        style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl mt-1 mb-2 text-white">Software Engineer</h2>
      </motion.div>
    </div>
  );
};

export default JobTitle;
