import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './FadeInSection.css';

const FadeInSection = ({ className, children }) => {
  const [isVisible, setVisible] = useState(true);
  const [shouldFade, setShouldFade] = useState(true); 
  const domRef = useRef();
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop){
        setShouldFade(true);
      } else {
        setShouldFade(false);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  useEffect(() => {
    if(shouldFade) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }
  }, [shouldFade]);
  return (
    <div
      className={classNames(
        className, 
        shouldFade && "fade-in-section",
        isVisible && "is-visible"
      )}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;