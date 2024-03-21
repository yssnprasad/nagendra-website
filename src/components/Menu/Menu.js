import React from 'react';
import styles from './Menu.module.css';

const Menu = ({ open, onClick }) => {
  return (
    <div className={`${styles.menu} ${open ? styles.open : ''}`}>
      <ul className={styles.navLinks}>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button className={styles.closeButton} onClick={onClick}>
        Close
      </button>
    </div>
  );
};

export default Menu;