import { climateCrisis } from '@/components/fonts';
import React, { useEffect, useState, useRef } from 'react';

const CountUp = () => {
  const [count, setCount] = useState(0);
  const start = 1;
  const end = 100;
  const duration = 3000; // total animation duration in ms
  const startTimeRef = useRef<number | null>(null);

  // easing function: ease-out cubic (starts slow, speeds up)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const t = Math.min(progress / duration, 1); // normalize 0-1
      const easedT = easeOutCubic(t);
      const currentCount = Math.floor(start + (end - start) * easedT);
      setCount(currentCount);

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return <h1 className={climateCrisis.className}>{count}</h1>;
};

export default CountUp;
