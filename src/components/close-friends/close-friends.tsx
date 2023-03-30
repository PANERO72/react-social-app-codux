import styles from './close-friends.module.scss';
import classNames from 'classnames';
import FriendImage from '../../assets/img/persons/2.jpeg';

export interface CloseFriendsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-close-friendss-and-templates
 */
export const CloseFriends = ({ className }: CloseFriendsProps) => {
    return (<>
        <li className={styles.sidebarFriendsItem}>
            <img
                src={FriendImage}
                className={styles.sidebarFriendsListImage}
                alt={'Foto del Amigo'}
            />
            <span>José Panero</span>
        </li>
        <li className={styles.sidebarFriendsItem}>
            <img
                src={FriendImage}
                className={styles.sidebarFriendsListImage}
                alt={'Foto del Amigo'}
            />
            <span>José Panero</span>
        </li>
        <li className={styles.sidebarFriendsItem}>
            <img
                src={FriendImage}
                className={styles.sidebarFriendsListImage}
                alt={'Foto del Amigo'}
            />
            <span>José Panero</span>
        </li>
        <li className={styles.sidebarFriendsItem}>
            <img
                src={FriendImage}
                className={styles.sidebarFriendsListImage}
                alt={'Foto del Amigo'}
            />
            <span>José Panero</span>
        </li>
    </>);
};