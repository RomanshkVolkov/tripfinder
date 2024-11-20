import { useState, useEffect } from 'react';

function getSize() {
  return {
    innerHeight: typeof window !== 'undefined' && window.innerHeight,
    innerWidth: typeof window !== 'undefined' && window.innerWidth,
    outerHeight: typeof window !== 'undefined' && window.outerHeight,
    outerWidth: typeof window !== 'undefined' && window.outerWidth,
  };
}
const useWindowSize = () => {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
