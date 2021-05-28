import styles from './contact.module.css';
import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <>
      <section className={styles.section}>
        <h2 className={styles.hTwo}>Contact Me</h2>
        <div className={styles.contact}>
          <div className={styles.icon}><i className="icon fa fa-phone"></i></div>
          <p className={styles.info}>(315) 486-5856</p>
        </div>
        <div className={styles.contact}>
          <div className={styles.icon}><i className="icon fa fa-envelope"></i></div>
          <p className={styles.info}>greg@metcalfdevelopment.com</p>
        </div>
        <div className={styles.contact}>
          <div className={styles.icon}><i className="icon fa fa-linkedin"></i></div>
          <p className={styles.info}><a className={styles.a} href="#">LinkedIn Profile</a></p>
        </div>
      </section>
        
      </>
    );
  }
}

export default Contact;
