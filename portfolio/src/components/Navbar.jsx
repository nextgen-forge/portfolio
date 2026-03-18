import { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.inner} container`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoText}>{CONFIG.name.split(' ')[0]}</span>
          <span className={styles.logoDot}>.</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`${styles.link} ${active === link.label ? styles.activeLink : ''}`}
                onClick={() => { setActive(link.label); setMenuOpen(false); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
              Resume ↗
            </a>
          </li>
        </ul>

        <button className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
