'use client';
import { useEffect, useState } from "react";

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(window.scrollY === 0) {
        setIsScrolled(() => false);
        console.log('start point')
      } else {
        setIsScrolled(() => true);
        console.log('moved!')
      };
    });
  }, []);

  return isScrolled;
};