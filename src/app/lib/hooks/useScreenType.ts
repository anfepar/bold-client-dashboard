import { useEffect, useState } from "react";

export type ScreenType = 'mobile' | 'tablet' | 'desktop'
const mobileBreakPoint = 425;
const tabletBreakPoint = 768

const getScreenType = (width: number): ScreenType => {
  if (width <= mobileBreakPoint) {
    return 'mobile'
  } else if (width <= tabletBreakPoint) {
    return 'tablet'
  }
  return 'desktop'
}

export default function useScreenType() {
  const [screenType, setScreenType] = useState<ScreenType>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const screenType = getScreenType(window.innerWidth)
      setScreenType(screenType);
    };

    const screenType = getScreenType(window.innerWidth)
    setScreenType(screenType);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenType;
};