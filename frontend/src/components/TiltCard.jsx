import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export function TiltCard({ children, className = '' }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02,
      });
    }
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className={`card ${className}`}>
      {children}
    </div>
  );
}
