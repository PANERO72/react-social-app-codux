//import logo from './assets/logo.svg';
import styles from './App.module.scss';
import {Home} from './pages/home/home';
import {Profile} from './pages/profile/profile';

import { useTranslation } from 'react-i18next';

function App() {
    return (
        <div className={styles.App}>
           <Profile />
        </div>
    );
}

export default App;