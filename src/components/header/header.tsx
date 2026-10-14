import styles from './header.module.scss'
import{useState, useEffect } from 'react';

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme((PrevTheme) => (PrevTheme === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('app-theme', theme);
  }, [theme]);
  
  return (
    <div className={styles.header}> 
      <div className={styles.header__title}>Голубев Артём</div>
      <button className={styles.header__theme} onClick={toggleTheme}>
        {theme === 'light' ? 'Светлая' : 'Тёмная'}
      </button>
    </div>
  )
}

export default Header;