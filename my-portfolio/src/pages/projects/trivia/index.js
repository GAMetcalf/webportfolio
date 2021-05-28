import styles from './trivia.module.css';
import React, { Component } from 'react';
import trivia from './trivia.png';
import question from './question.png';
import finalScore from './finalScore.png';
import triviaMobile from './triviaMobile.png';

class PBandJam extends Component {
  render() {
    return (
      <>
        <section className={styles.pbj}>
          <img className={styles.topimg} src={trivia} alt="PBandJam XD home design"/>
          <h2 className={styles.hTwo}>Quick Trivia</h2>
          <p className={styles.strong}>Trivia app using Open Trivia DB API</p>
          <h3 className={styles.hThree}>Project</h3>
          <p className={styles.p}>Title: Quick Trivia</p>
          <p className={styles.p}>
            This is a functioning app utilizing the API from Open Trivia DB. It allows the 
            user to select how many questions they want, the type of question, and the 
            difficulty of the questions.
          </p>
          <h3 className={styles.hThree}>Role</h3>
          <p className={styles.p}>Student / Web Designer and Developer</p>
          <h3 className={styles.hThree}>Timeline</h3>
          <p className={styles.p}>1 month</p>
          <div className={styles.line}></div>
          <h4 className={styles.hFour}>Scope of the Project</h4>
          <p className={styles.p}>
            To come up with an idea for an application that uses an online API to retrieve data from. 
            Then, create mockups in Adobe XD and build out the application in React.
          </p>
          <h4 className={styles.hFour}>What Did I Learn?</h4>
          <p className={styles.p}>
            At the time, it was tough understanding the async/await concepts for getting data from an 
            API. Overall, I learned how to make calls to an API to retrieve data, format it, style it, 
            and display it to the user. Though it's completely functional, I'm not sharing the code at 
            the moment.
          </p>
          <p className={styles.p}>
            I remember having a lot of trouble understanding how the data was coming back and kept getting 
            the 'undefined' error. I haven't been able to get back to refactor the code and take a good look 
            at it, but it is making two calls to the API and the second of which is the one I was able to grab 
            the data from. That was my first or second time working with something like that and though I'm 
            still challenged by this side of things, I only need to make one call to get the data I need!
            General heads up to anyone who has made it to this section of my profile, the design and code 
            will be updated and refactored respectively in the near future. 
          </p>
          <h5 className={styles.hFive}>Views of the finished process</h5>
          <figure className={styles.figure}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={trivia} alt="Trivia app main menu"/>
              <figcaption>Trivia app main menu</figcaption>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={question} alt="Trivia app question view"/>
              <figcaption>Trivia app question view</figcaption>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={finalScore} alt="Trivia app final score view"/>
              <figcaption>Trivia app final score view</figcaption>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={triviaMobile} alt="Trivia app mobile design in Adobe XD"/>
              <figcaption>Trivia app mobile design in Adobe XD</figcaption>
            </div>
          </figure>
        </section>
      </>
    );
  }
}

export default PBandJam;
