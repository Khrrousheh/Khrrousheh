import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <a 
        href="https://drive.google.com/file/d/1BKuvNSeYf8hgUaEMRSChH4u-vtRCqZff/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="download-link"
        aria-label="View resume PDF"
        >
        View resume as PDF
        </a>

        <p className="copyright">
          © {currentYear} Mahdi Khrrousheh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
