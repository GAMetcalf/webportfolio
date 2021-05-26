import styles from './home.module.css';
import React, { Component } from 'react';
import pallette from './pallette.png';
import xdHome from './xdHome.png';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <section className={styles.intro}>
          <h1 className={styles.hOne}>Welcome to my Portfolio!</h1>
          <p className={styles.p}>I am an always learning, guitar playing, pool playing web<br></br>designer and developer with a passion for front-end work.</p>
          <h2 className={styles.hTwo}>Most Proficient Technologies:</h2>
          <ul>
            <li>Adobe XD</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
          </ul>
        </section>
        <section className={styles.pbj}>
          <h1 className={styles.pbjTitle}>PBandJam</h1>
          <p className={styles.desc}>I created this project for school and was tasked to used Bootstrap.</p>
          <p className={styles.desc}>This is an idea for a social networking site for musicians where they can play together in near real time.</p>
          <p className={styles.desc}>I'm most proud of my color choices and designs in Adobe XD over the finished product,<br/>mainly because it was a lot of Bootstrap CSS to do in a short amount of time, but I'm still proud of it.</p>
          <div className={styles.images}>
            <figure>
              <img src={pallette} alt="PBandJam color pallette"/>
              <figcaption>PBandJam color pallette</figcaption>
            </figure>
            <figure>
              <img src={xdHome} alt="PBandJam Adobe XD home mockup"/>
              <figcaption>PBandJam home design in Adobe XD</figcaption>
            </figure>
          </div>
          <Link className={styles.readmore} to="/projects/pbandjam">More PBandJam Details</Link>
        </section>
      </>
    );
  }
}

export default Home;
