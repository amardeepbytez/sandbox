import React, { useEffect } from 'react';

const Progressbar = () => {
  useEffect(() => {
    const theme = {
      init: function() {
        theme.pageProgress();
      },
      pageProgress: () => {
        const progressWrap = document.querySelector('.progress-wrap');
        if (progressWrap != null) {
          const progressPath = document.querySelector('.progress-wrap path');
          const pathLength = progressPath.getTotalLength();
          const offset = 50;
          progressPath.style.transition = 'none';
          progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = 'stroke-dashoffset 10ms linear';
          const handleScroll = () => {
            const scroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
            if (scroll >= offset) {
              progressWrap.classList.add('active-progress');
            } else {
              progressWrap.classList.remove('active-progress');
            }
          };
          window.addEventListener('scroll', handleScroll);
          progressWrap.addEventListener('click', (e) => {
            e.preventDefault();
            window.scroll({
              top: 0, 
              left: 0,
              behavior: 'smooth'
            });
          });

          // Cleanup function to remove the event listener
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }
      },
    };
    theme.init();
  }, []);

  return (
    <div className="progress-wrap">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default Progressbar;
