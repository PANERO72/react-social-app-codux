import styles from './post.module.scss';
import classNames from 'classnames';
import { MoreVert } from '@material-ui/icons';
import PostProfileImg from '../../assets/img/persons/4.jpeg';
import PostImage from '../../assets/img/post/1.jpeg';
import HeartIcon from '../../assets/img/like.png';
import LikeIcon from '../../assets/img/heart.png';

import { useTranslation, Trans } from 'react-i18next';

export interface PostProps {
    className?: string;
    id: number;
    desc: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
    // username: string;
    // userIamge: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-posts-and-templates
 */
export const Post = ({ className, id, desc, photo, date, userId, like, comment, /*username, userIamge*/ }: PostProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(className, styles.post)}>
            {/* <span>{id}</span> */}
            <div className={styles.postWrapper}>
                <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <img
                            src={PostProfileImg}
                            className={styles.postProfileImg}
                            alt={'Imagen del Perfil'}
                        />
                        <span className={classNames(styles.postuserName, styles.postUserName)}>
                            {/* {username} */} José Panero
                        </span>
                        <span className={styles.postDate}>{date}</span>
                    </div>
                    <div className={styles.postTopRight}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postCenter}>
                    <span className={styles.postText}>
                        {desc}
                        <img src={photo} alt={'Imagen del Post'} />
                    </span>
                </div>
                <div className={styles.postBottom}>
                    <div className={styles.postBottomLeft}>
                        <img
                            src={LikeIcon}
                            alt={'Icono de me Gusta'}
                            className={styles.postLikeIcon}
                        />
                        <img
                            src={HeartIcon}
                            alt={'Icono de lo Amo'}
                            className={styles.postHartIcon}
                        />
                        <span className={styles.postCounterLikes}>a {like} personas le gusta</span>
                    </div>
                    <div className={styles.postBottomRight}>
                        <span className={styles.postCommentsText}>{comment} comentarios</span>
                    </div>
                </div>

                {/* <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <img
                            src={PostProfileImg}
                            className={styles.postProfileImg}
                            alt={'Imagen de Perfil'}
                        />
                        <span className={classNames(styles.postuserName, styles.postUserName)}>
                            José Panero
                        </span>
                        <span className={styles.postDate}>hace 10 minutos</span>
                    </div>
                    <div className={styles.postTopRight}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postCenter}>
                    <span className={styles.postText}>
                        Mi primer post :)
                        <img src={PostImage} alt={'Imagen del Post'} />
                    </span>
                </div>
                <div className={styles.postBottom}>
                    <div className={styles.postBottomLeft}>
                        <img
                            src={LikeIcon}
                            alt={'Icono de me Gusta'}
                            className={styles.postLikeIcon}
                        />
                        <img
                            src={HeartIcon}
                            alt={'Icono de lo Amo'}
                            className={styles.postHartIcon}
                        />
                        <span className={styles.postCounterLikes}>a 6 personas le gusta</span>
                    </div>
                    <div className={styles.postBottomRight}>
                        <span className={styles.postCommentsText}>10 comentarios</span>
                    </div>
                </div> */}

            </div>
        </div>
    );
};
