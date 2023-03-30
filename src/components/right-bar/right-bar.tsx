import styles from './right-bar.module.scss';
import classNames from 'classnames';
import GiftImage from '../../assets/img/gift.png';
import AdImage from '../../assets/img/ad.png';
import {OnlineUsers} from '../online-users/online-users';

export interface RightBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-right-bars-and-templates
 */
export const RightBar = ({ className }: RightBarProps) => {
    return (
        <div className={classNames(className, styles.rightbar)}>
            <div className={styles.rightbarWrapper}>
                <div className={styles.birthdayContainer}>
                    <img
                        src={GiftImage}
                        className={styles.birthdayImage}
                        alt={'Imagen de Regalo'}
                    />
                    <span className={styles.birthdayText}>
                        <strong>José Panero</strong> y <strong>otros 3 amigos</strong> cumplen años
                        hoy
                    </span>
                </div>
                <img src={AdImage} className={styles.rightbarAddImage} alt={'Imagen del Anuncio'} />
                <h4 className={styles.rightbarFriendsTitle}>Amig@s en Línea</h4>
                <ul className={styles.rightbarFriendsList}>
                    <OnlineUsers />
                </ul>
            </div>
        </div>
    );
};
