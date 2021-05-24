/* eslint-disable */
import styles from './header.module.css';
import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.background}>
      <nav className={styles.nav}>
        <ol>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/projects">Projects</Link>
          <Link className={styles.link} to="/resume">Resume</Link>
          <Link className={styles.link} to="/contact">Contact</Link>
        </ol>
      </nav>
    </header>
  );
}