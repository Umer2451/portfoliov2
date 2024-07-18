import React, { useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.querySelector(':root');

    if (isDarkMode) {
      root.style.setProperty('--background-color', '#C4E5D3');
      root.style.setProperty('--color', 'black');
      root.style.setProperty('--h1color', 'black');
      root.style.setProperty('--face-background', 'white');
      root.style.setProperty('--face-border', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--face-text-color', 'black');
    } else {
      root.style.setProperty('--background-color', 'black');
      root.style.setProperty('--color', 'white');
      root.style.setProperty('--h1color', 'white');
      root.style.setProperty('--face-background', 'white');
      root.style.setProperty('--face-border', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--face-text-color', 'black');
    }
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className={`theme-icon ${isDarkMode ? 'sun' : 'moon'}`} />
    </button>
  );
};

export default ThemeToggle;
