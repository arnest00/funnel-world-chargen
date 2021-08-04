import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Funnel World Villager Generator</h1>
      </header>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;