import { useState, useEffect } from 'react';

export function useTimeout() {
  const [state, setState] = useState(false);
  useEffect(() => {
    const loading = setTimeout(() => {
      setState(true);
    }, 500);
    return () => clearTimeout(loading);
  }, []);

  return { state };
}
