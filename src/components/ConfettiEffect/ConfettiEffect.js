import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiEffect = () => {
  useEffect(() => {
    // Fire confetti when component mounts
    confetti({
      particleCount: 100, // Number of confetti pieces
      spread: 70, // Spread of the confetti
      origin: { y: 0.6 }, // Adjusts the starting point
    });
  }, []);

  return null; // This component doesn't render anything visible
};

export default ConfettiEffect;
