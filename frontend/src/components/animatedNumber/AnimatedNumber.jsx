import { useEffect, useState } from "react";

function AnimatedNumber({ target }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // 2 seconds
    const startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      // Ease-out effect (slows near the end)
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [target]);

  return <span>{value}</span>;
}
export default AnimatedNumber;
