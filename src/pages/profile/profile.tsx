import styles from './profile.module.scss';
import classNames from 'classnames';
import { TopBar } from '../../components/top-bar/top-bar';
import { SideBar } from '../../components/side-bar/side-bar';
import { Feed } from '../../components/feed/feed';
import { RightBar } from '../../components/right-bar/right-bar';
import PostImage from '../../assets/img/post/8.jpeg';
import UserImage from '../../assets/img/persons/8.jpeg';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-profiles-and-templates
 */
export const Profile = ({ className }: ProfileProps) => {
    return (
        <>
            <TopBar />
            <div className={classNames(styles.profile, className)}>
                <SideBar />
                <div className={styles.profileRightSide}>
                    <div className={styles.profileRightTop}>
                        <div className={classNames(styles.profileImagesContainer)}>
                            <img
                                className={styles.profileCoverImage}
                                src={PostImage}
                                alt={'Imagen del Post'}
                            />
                            <img
                                src={UserImage}
                                className={styles.profileUserImage}
                                alt={'Imagen del Usuario'}
                            />
                        </div>
                        <div className={styles.profileInfo}>
                            <h4 className={styles.profileUserName}>José Panero</h4>
                            <span className={styles.profileUserDesc}>Posk msmsj jsjskk ks</span>
                        </div>
                    </div>
                    <div className={styles.profileRightBottom}>
                        <Feed />
                        <RightBar />
                    </div>
                </div>
            </div>
        </>
    );
};
