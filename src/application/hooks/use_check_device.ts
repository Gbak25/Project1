import { useCallback, useEffect, useState } from 'react';

export function useCheckDevice(): boolean {
  const [isMobile, setMobile] = useState(false);

  const handleResize = useCallback((): void => {
    setMobile(window.innerWidth < 600);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
