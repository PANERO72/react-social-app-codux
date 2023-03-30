import styles from './top-bar.module.scss';
import classNames from 'classnames';
// import SearchIcon from '@material-ui/icons/Search';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { useTranslation, Trans } from 'react-i18next';

import userImage from '../../assets/img/persons/1.jpeg';

export interface TopBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-top-bars-and-templates
 */
export const TopBar = ({ className }: TopBarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.topBarLeft}>
                <span className={styles.logo}>LamaSocial</span>
            </div>
            <div className={styles.topBarCenter}>
                <div className={styles.searchbar}>
                    <input
                        type={'search'}
                        placeholder={'Buscar amigos, post o vídeos...'}
                        className={styles.searchInput}
                    />
                    <Search className={styles.searchIcon}></Search>
                </div>
            </div>
            <div className={styles.topBarRight}>
                <div className={styles.topBarLinks}>
                    <span className={styles.topBarLink}>Inicio</span>
                    <span className={styles.topBarLink}>Cronología</span>
                </div>
            </div>
            <div className={styles.topBarIcons}>
                <div className={styles.topBarIconItem}>
                    <Person />
                    <span className={styles.topBarIconBagde}>1</span>
                </div>
                <div className={styles.topBarIconItem}>
                    <Chat />
                    <span className={styles.topBarIconBagde}>1</span>
                </div>
                <div className={styles.topBarIconItem}>
                    <Notifications />
                    <span className={styles.topBarIconBagde}>1</span>
                </div>
            </div>
            <div className={classNames(styles.topBarImage, styles.topBarImageContainer)}>
                <img
                    src={userImage}
                    className={styles.topBarImage}
                    alt={'Imagen del perfil'}
                />
            </div>
        </div>
    );
};
