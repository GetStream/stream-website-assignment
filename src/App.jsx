import Placeholder from './components/Placeholder';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.appNav}>
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Dr. Profiles</a>
          </li>
          <li>
            <a>Organization</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
        <Placeholder height='400px'></Placeholder>
      </nav>
      <main className={styles.appMain}>
        <header className={styles.appMainHeader}>
          <input placeholder='Search for query' />
        </header>
        <section className={styles.appMainOverview}>
          <h2>Analytics Overview</h2>
          <Placeholder>
            {/* Fetch Data from API */}
          </Placeholder>
        </section>
        <section className={styles.appMainStats}>
          <h2>Hospital Stats</h2>
          <Placeholder height='250px'>
            {/* Fetch Data from API */}
          </Placeholder>
        </section>
      </main>
    </div>
  )
}

export default App
