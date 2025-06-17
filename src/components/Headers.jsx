export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <h1>Mahdi Khrrousheh</h1>
      <p>Software Developer | Backend | Cloud | DevOps</p>
      <button 
        onClick={toggleDarkMode} 
        className="theme-toggle"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}