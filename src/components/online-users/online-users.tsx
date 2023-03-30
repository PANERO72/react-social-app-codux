import styles from './online-users.module.scss';
import classNames from 'classnames';
import ProflieImage from '../../assets/img/persons/6.jpeg';

export interface OnlineUsersProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-online-userss-and-templates
 */
export const OnlineUsers = ({ className }: OnlineUsersProps) => {
    return (<>
        <li className={styles.rightbarFriendsListItem}>
            <div className={styles.rightbarFriendsImageContainer}>
                <img
                    src={ProflieImage}
                    className={styles.rightbarFriendsImage}
                    alt={'Imagen del perfil'}
                />
                <span className={styles.rightbarFriendsOnlineStatus}></span>
            </div>
            <span className={styles.rightbarFriendsUsername}>José Panero</span>
        </li>
        <li className={styles.rightbarFriendsListItem}>
            <div className={styles.rightbarFriendsImageContainer}>
                <img
                    src={ProflieImage}
                    className={styles.rightbarFriendsImage}
                    alt={'Imagen del perfil'}
                />
                <span className={styles.rightbarFriendsOnlineStatus}></span>
            </div>
            <span className={styles.rightbarFriendsUsername}>José Panero</span>
        </li>
        <li className={styles.rightbarFriendsListItem}>
            <div className={styles.rightbarFriendsImageContainer}>
                <img
                    src={ProflieImage}
                    className={styles.rightbarFriendsImage}
                    alt={'Imagen del perfil'}
                />
                <span className={styles.rightbarFriendsOnlineStatus}></span>
            </div>
            <span className={styles.rightbarFriendsUsername}>José Panero</span>
        </li>
        <li className={styles.rightbarFriendsListItem}>
            <div className={styles.rightbarFriendsImageContainer}>
                <img
                    src={ProflieImage}
                    className={styles.rightbarFriendsImage}
                    alt={'Imagen del perfil'}
                />
                <span className={styles.rightbarFriendsOnlineStatus}></span>
            </div>
            <span className={styles.rightbarFriendsUsername}>José Panero</span>
        </li>
    </>);
};
