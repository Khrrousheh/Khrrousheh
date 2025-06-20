import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <h1 className="header-title">Mahdi Khrrousheh</h1>
        <p className="header-subtitle">Software Developer | Backend | Cloud | DevOps</p>
      </div>
      
      <button
        onClick={toggleDarkMode}
        className="theme-toggle"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={darkMode}
      >
        {darkMode ? (
          <span aria-hidden="true">☀️</span>
        ) : (
          <span aria-hidden="true">🌙</span>
        )}
      </button>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default React.memo(Header);