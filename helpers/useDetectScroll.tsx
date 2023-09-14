import { useEffect, useState } from "react";

export default function useDetectScroll() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      function handleScroll() {
        if (window.pageYOffset === 0) {
          setIsScrolled(false);
        } else {
          setIsScrolled(true);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return [isScrolled];
}