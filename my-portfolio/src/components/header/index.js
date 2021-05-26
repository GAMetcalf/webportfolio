/* eslint-disable */
import styles from './header.module.css';
import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.background}>
      <div>
        <h1 className={styles.headerOne}>Greg Metcalf</h1>
        <p className={styles.headerp}>Web Design & Development</p>
      </div>
      <nav className={styles.nav}>
        <ol>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/projects">Projects</Link>
          <Link className={styles.link} to="/contact">Contact</Link>
          <a className={styles.link} href="https://drive.google.com/file/d/1BZwmJ5Mq3Jom96LozFiX-AXiJfXjBYff/view?usp=sharing" download="Greg Metcalf's Resume">Resume</a>
        </ol>
      </nav>
    </header>
  );
}