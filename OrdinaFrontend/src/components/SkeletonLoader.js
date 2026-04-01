import React from 'react';
import { useTheme } from '../context/ThemeContext';

function SkeletonLoader() {
  const { isDarkMode } = useTheme();

  return (
    <div className="skeleton-container">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`skeleton-item ${isDarkMode ? 'dark' : ''}`}
        >
          <div className="skeleton-checkbox"></div>

          <div className="skeleton-content">
            <div className="skeleton-line title"></div>
            <div className="skeleton-line meta"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;