import { Outlet } from 'react-router';
import styles from './App.module.scss';
import { Header, Footer } from '@/components';

function App() {
  return (
    <div className={styles.app}>
      <Header isPlaying />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
