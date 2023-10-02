import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import styles from "./css/card.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>My Beautiful Website</h1>
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
