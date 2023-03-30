import styles from './side-bar.module.scss';
import classNames from 'classnames';
import {
    RssFeed,
    Chat,
    PlayCircleFilled,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from '@material-ui/icons';
import TopBar_module from '../top-bar/top-bar.module.scss';
import { CloseFriends } from '../close-friends/close-friends';

export interface SideBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-side-bars-and-templates
 */
export const SideBar = ({ className }: SideBarProps) => {
    return (
        <div className={classNames(styles.sidebar, className)}>
            <div className={styles.sidebarWrapper}>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>
                        <RssFeed className={styles.sidebarIcon} /> Coffee
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Chat className={styles.sidebarIcon} /> Tea
                    </li>
                    <li className={styles.sidebarListItem}>
                        <PlayCircleFilled className={styles.sidebarIcon} /> Milk
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Group className={styles.sidebarIcon} /> Milk
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Bookmark className={styles.sidebarIcon} /> Milk
                    </li>
                    <li className={styles.sidebarListItem}>
                        <HelpOutline className={styles.sidebarIcon} /> Milk
                    </li>
                    <li className={styles.sidebarListItem}>
                        <WorkOutline className={styles.sidebarIcon} /> Milk
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Event className={styles.sidebarIcon} /> Milk
                    </li>
                    <li className={styles.sidebarListItem}>
                        <School className={styles.sidebarIcon} /> Milk
                    </li>
                </ul>
                <hr className={styles.sidebarFriendsHr} />
                <button className={styles.sidebarButton}>Mostrar más...</button>
                <ul className={styles.sidebarFriendsList}>
                    <CloseFriends />
                </ul>
            </div>
        </div>
    );
};
