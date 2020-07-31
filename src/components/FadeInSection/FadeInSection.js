import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './FadeInSection.css';

const FadeInSection = ({ shouldFade = false, className, children }) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    if(shouldFade) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }
  }, []);
  return (
    <div
      className={classNames(className, shouldFade && "fade-in-section", isVisible && "is-visible")}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;