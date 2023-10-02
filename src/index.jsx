import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import styles from "./css/card.module.css";
import image1 from "./images/396-3966460_fpt-fpt-software-logo-png-clipart.png";
import "./scss/book.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>ĐÂY LÀ WEB DEMO THÔI</h1>
        <p>❤❤❤❤❤❤❤❤</p>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Welcome to My Website</h2>
          <p className={styles.sectionText}>
            This is a beautiful and creative website built with React.
          </p>
          <div className="cart-item-product">
            <img
              className="product-image"
              src={image1}
              alt="Product"
              width={"100px"}
            />
            <div className="product-details">
              <div className="product-title">Product Name</div>
              <div className="product-price">$19.99</div>
            </div>
            <div className="product-quantity">Quantity: 2</div>
            <div className="product-remove">Remove</div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} My Beautiful Website
        </p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
