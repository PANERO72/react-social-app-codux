import styles from './share.module.scss';
import classNames from 'classnames';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import ImageProfile from '../../assets/img/persons/3.jpeg';

export interface ShareProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-shares-and-templates
 */
export const Share = ({ className }: ShareProps) => {
    return (
        <div className={classNames(className, styles.share)}>
            <div className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                    <img
                        src={ImageProfile}
                        alt={'Imagen del Perfil'}
                        className={styles.shareProfileImage}
                    />
                    <input
                        type={'text'}
                        placeholder={'¿Qué te pasa por la cabeza, Pepe?'}
                        className={styles.shareInput}
                    />
                </div>
            </div>
            <hr className={styles.shareHr} />
            <div className={styles.shareBottom}>
                <div className={styles.shareOptions}>
                    <div className={styles.shareOptionItem}>
                        <PermMedia htmlColor="tomato" className={styles.shareOptionIcon} />
                        <span className={styles.shareOptionItemText}>Foto o Vídeo</span>
                    </div>
                    <div className={styles.shareOptionItem}>
                        <Label className={styles.shareOptionIcon} htmlColor={'blue'} />
                        <span className={styles.shareOptionItemText}>Etiquetar</span>
                    </div>
                    <div className={styles.shareOptionItem}>
                        <Room className={styles.shareOptionIcon} htmlColor={'green'} />
                        <span className={styles.shareOptionItemText}>Ubicación</span>
                    </div>
                    <div className={styles.shareOptionItem}>
                        <EmojiEmotions className={styles.shareOptionIcon} htmlColor={'goldenrod'} />
                        <span className={styles.shareOptionItemText}>Sentimientos</span>
                    </div>
                    <button className={styles.shareButton}>Compartir</button>
                </div>
            </div>
        </div>
    );
};
