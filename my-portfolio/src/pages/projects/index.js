import styles from './projects.module.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pBandJam from '../home/xdHome.png';
import trivia from './trivia.png';
import shipit from './noResults.png';

class Projects extends Component {

  render() {
    return (
      <>
        <section className={styles.pbandjam}>
          <h2>PBandJam</h2>
          <img className={styles.img} src={pBandJam} alt="PBandJam XD home design"/>
          <Link className={styles.readmore} to="/projects/pbandjam">Learn about this project</Link>
        </section>
        <section className={styles.trivia}>
        <h2>Quick Trivia</h2>
          <img className={styles.img} src={trivia} alt="Quick Trivia XD home design"/>
          <Link className={styles.readmore} to="/projects/quicktrivia">Learn about this project</Link>
        </section>
        <section className={styles.shipit}>
        <h2>ShipIt (Search Functionality)</h2>
          <img className={styles.img} src={shipit} alt="ShipIt search page with no results"/>
          <Link className={styles.readmore} to="/projects/shipit">Learn about this project</Link>
        </section>
      </>
    );
  }
}

export default Projects;
