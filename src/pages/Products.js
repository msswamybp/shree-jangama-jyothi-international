
import React from 'react';
import { products } from '../constants/constant';



function Products() {
  return (
    <div>
      {/* Banner */}
      <div style={styles.banner}>
        <h1 style={styles.bannerText}>Products</h1>
      </div>

      {/* Section Title */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Premium Products</h2>
        <p style={styles.subheading}>
          Explore our diverse range of high-quality products, including spices, fresh fruits, vegetables, and aromatic coffee & tea.
        </p>

        {/* Product Grid */}
        <div style={styles.grid}>
          {products.map((product, index) => (
            <div key={index} style={styles.card}>
              <img src={product.image} alt={product.title} style={styles.cardImage} />
              <h3 style={styles.cardTitle}>{product.title}</h3>
              <p style={styles.cardDesc}>{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  banner: {
    background: 'linear-gradient(to right, #5cb85c, #4cae4c)',
    color: '#fff',
    textAlign: 'center',
    padding: '60px 20px',
    backgroundImage: "url('/assets/images/banner.jpg')", // Optional banner image
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  bannerText: {
    fontSize: '48px',
    fontWeight: 'bold'
  },
  section: {
    padding: '40px 20px',
    textAlign: 'center'
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  subheading: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '40px',
    maxWidth: '800px',
    margin: '0 auto 40px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    textAlign: 'left'
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '15px'
  },
  cardDesc: {
    fontSize: '14px',
    color: '#555',
    margin: '0 15px 15px'
  }
};

export default Products;

