import styles from './projects.module.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pBandJam from '../home/xdHome.png';
import trivia from './trivia.png';

class Projects extends Component {

  render() {
    return (
      <>
        <section className={styles.pbandjam}>
          <h2 className={styles.hTwo}>PBandJam</h2>
          <img className={styles.img} src={pBandJam} alt="PBandJam XD home design"/>
          <Link className={styles.readmore} to="/projects/pbandjam">Learn about this project</Link>
        </section>
        <section className={styles.trivia}>
        <h2 className={styles.hTwo}>Quick Trivia</h2>
          <img className={styles.img} src={trivia} alt="Quick Trivia XD home design"/>
          <Link className={styles.readmore} to="/projects/trivia">Learn about this project</Link>
        </section>
      </>
    );
  }
}

export default Projects;
