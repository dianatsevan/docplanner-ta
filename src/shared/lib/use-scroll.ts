import { useCallback, useRef, useState } from 'react';

export const useScroll = (callback: () => void) => {
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { clientWidth, scrollLeft, scrollWidth } = ref.current;

      setIsLeftDisabled(scrollLeft === 0);

      if (scrollWidth - scrollLeft === clientWidth) {
        callback();
      }
    }
  }, [callback]);

  const scrollLeft = () => {
    ref.current?.scrollBy({
      left: -ref.current.clientWidth,
    });
  };

  const scrollRight = () => {
    ref.current?.scrollBy({
      left: ref.current.clientWidth,
    });
  };

  return {
    handleScroll,
    isLeftDisabled,
    ref,
    scrollLeft,
    scrollRight,
  };
};
