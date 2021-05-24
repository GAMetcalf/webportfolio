/* eslint-disable */
import styles from './app.module.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';

function App() {
  return (
    <section className={styles.container}>
      <Router>
        <Header />
        <main className={styles.content}>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </main>
      </Router>
    </section>
  );
}

export default App;
