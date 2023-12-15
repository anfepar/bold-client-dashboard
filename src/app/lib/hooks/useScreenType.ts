import { useEffect, useState } from "react";

export type ScreenType = 'mobile' | 'tablet' | 'desktop'
const mobileSize = 425;
const tabletSize = 768

const getScreenType = (width: number): ScreenType => {
  if (width <= mobileSize) {
    return 'mobile'
  } else if (width <= tabletSize) {
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