import styles from './post.module.scss';
import classNames from 'classnames';
import { MoreVert } from '@material-ui/icons';
import PostProfileImg from '../../assets/img/persons/4.jpeg';
import PostImage from '../../assets/img/post/1.jpeg';
import HeartIcon from '../../assets/img/like.png';
import LikeIcon from '../../assets/img/heart.png';

export interface PostProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-posts-and-templates
 */
export const Post = ({ className }: PostProps) => {
    return (
        <div className={classNames(className, styles.post)}>
            <div className={styles.postWrapper}>
                <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <img
                            src={PostProfileImg}
                            className={styles.postProfileImg}
                            alt={'Imagen de Perfil'}
                        />
                        <span className={classNames(styles.postuserName, styles.postUserName)}>
                            José Panero
                        </span>
                        <span className={styles.postDate}>hace 30 minutos</span>
                    </div>
                    <div className={styles.postTopRight}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postCenter}>
                    <span className={styles.postText}>
                        Mi primer post publicado :)
                        <img src={PostImage} className={styles.postImage} alt={'Imagen del Post'} />
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
                        <span className={styles.postCounterLikes}>a 32 personas le gusta</span>
                    </div>
                    <div className={styles.postBottomRight}>
                        <span className={styles.postCommentsText}>10 comentarios</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
