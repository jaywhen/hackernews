import { useEffect } from 'react';

const useScrollTo = (nav: string) => {
  useEffect(() => {
    const lastScrollPosY = sessionStorage.getItem(`${nav}_POS_Y`);

    if (lastScrollPosY) {
      window.scrollTo(0, parseInt(lastScrollPosY));
    }
  }, []);
};

export default useScrollTo;
