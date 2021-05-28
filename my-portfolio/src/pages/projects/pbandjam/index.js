import styles from './pbandjam.module.css';
import React, { Component } from 'react';
import pBandJam from './xdHome.png';
import login from './login.png';
import searchMusic from './searchMusic.png';
import wireframe from './wireframe.png';

class PBandJam extends Component {
  render() {
    return (
      <>
        <section className={styles.pbj}>
          <img className={styles.topimg} src={pBandJam} alt="PBandJam XD home design"/>
          <h2 className={styles.hTwo}>PBandJam</h2>
          <p className={styles.strong}>Musician Social Networking and Jamming App</p>
          <a className={styles.a} href="https://gametcalf.github.io/">Check out the live version</a>
          <h3 className={styles.hThree}>Project</h3>
          <p className={styles.p}>Title: PBandJam</p>
          <p className={styles.p}>
            This is a fictional app that would allow musicians to be able to browse 
            through prior recorded music, current live music, network with musicians, 
            and be able to play with other musicians in near real time. There is no 
            backend for this as the main goal was to use Bootstrap to do all of the styling.
          </p>
          <h3 className={styles.hThree}>Role</h3>
          <p className={styles.p}>Student / Web Designer and Developer</p>
          <h3 className={styles.hThree}>Timeline</h3>
          <p className={styles.p}>1 month</p>
          <div className={styles.line}></div>
          <h4 className={styles.hFour}>Scope of the Project</h4>
          <p className={styles.p}>
            To sketch and design ideas for all pages of my project while making 
            revisions based on instructor feedback. Once approved, structure the 
            HTML and begin styling all of the pages to achieve as close of a 
            replication of the designs from the prototype.
          </p>
          <h4 className={styles.hFour}>What Did I Learn?</h4>
          <p className={styles.p}>
            I was able to practice and learn how to create and refine my sketches 
            and prototype designs in Adobe XD. I then learned how to implement 
            Bootstrap CSS into my HTML to try and match the designs from Adobe XD.
          </p>
          <p className={styles.p}>
            I had quite a bit of trouble trying to find a way to create an animation 
            that I came up with in XD. I was not able to implement it within the time 
            requirements for the project. Overall, I would say I was able to get the 
            website to match ~80% of my prototype due to some limitations and time 
            constraints.
          </p>
          <h5 className={styles.hFive}>Views of the finished process</h5>
          <figure className={styles.figure}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={pBandJam} alt="PBandJam XD home design"/>
              <figcaption>Top of PBandJam Home Page</figcaption>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={login} alt="PBandJam login design"/>
              <figcaption>PBandJam Login Design</figcaption>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={searchMusic} alt="PBandJam search music design"/>
              <figcaption>PBandJam Search Music Page</figcaption>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={wireframe} alt="PBandJam prototype"/>
              <figcaption>PBandJam all hooked up in Adobe XD</figcaption>
            </div>
          </figure>
        </section>
      </>
    );
  }
}

export default PBandJam;
