'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const RevealOnScroll = ({
  children,
  duration = 0.6,
  delay = 0,
  yOffset = 50,
  once = false, // set to false to re-animate every time
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3, // 30% visible
    once: once,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
