import React, { useState, useEffect } from 'react';
import './theme.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check localStorage for saved theme preference, default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? (
        <i className="uil uil-moon theme-icon"></i>
      ) : (
        <i className="uil uil-sun theme-icon"></i>
      )}
    </button>
  );
};

export default ThemeToggle;

