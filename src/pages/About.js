

import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      {/* Page Title */}
      <div style={styles.header}>
        <h1 style={styles.title}>About us</h1>
        <div style={styles.divider}>
          <span style={styles.line}></span>
          <span style={styles.icon}>⚙</span>
          <span style={styles.line}></span>
        </div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <p style={styles.paragraph}>
          One stop destination for an exotic collection of all different types tea. We have built up a long-standing
          reputation for offering varieties that are rare and difficult to source from elsewhere.
          <span style={styles.highlight}> Shree Jangama Jyothi International </span>
          company constantly seek to grow business throughout the world that will allow us to create the greatest value.
        </p>

        <h3 style={styles.subheading}>Our Vision:</h3>
        <p style={styles.paragraph}>
          Leverage our quest for perfection with our passion to create a unique collection of exotic teas that will
          become leaders in their niche markets.
        </p>

        <h3 style={styles.subheading}>Our Mission:</h3>
        <p style={styles.paragraph}>
          We will achieve our leadership status by focusing on quality, taste, aroma and flavor, while offering a truly
          large variety of exotic teas.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '30px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  line: {
    width: '40px',
    height: '2px',
    backgroundColor: '#ccc',
  },
  icon: {
    fontSize: '18px',
  },
  content: {
    textAlign: 'left',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#333',
    marginBottom: '20px',
  },
  highlight: {
    color: '#8bc34a',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#444',
  },
};

export default About;
