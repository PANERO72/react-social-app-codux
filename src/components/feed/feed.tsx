import styles from './feed.module.scss';
import classNames from 'classnames';
import { Share } from '../share/share';
import { Post } from '../post/post';
import {Posts} from '../../dummyData';

export interface FeedProps {
    className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-feeds-and-templates
 */
export const Feed = ({ className}: FeedProps) => {
    return (<>
        <div className={classNames(className, styles.feed)}>
            <div className={styles.feedWrapper}>
                <Share />
                <Post /> 
            </div>
        </div>
    </>);
};
