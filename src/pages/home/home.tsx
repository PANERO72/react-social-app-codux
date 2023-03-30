import styles from './home.module.scss';
import classNames from 'classnames';
import { useTranslation, Trans } from 'react-i18next';
import { TopBar } from '../../components/top-bar/top-bar';
import {SideBar} from '../../components/side-bar/side-bar';
import {Feed} from '../../components/feed/feed';
import {RightBar} from '../../components/right-bar/right-bar';

export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-homes-and-templates
 */
export const Home = ({ className }: HomeProps) => {
    const { t, i18n } = useTranslation();
    return (<>
        <TopBar />
        <div className={classNames(styles.root, className)}>
            <div className={styles.homeContainer}>
                <SideBar />
                <Feed />
                <RightBar />
            </div>

            <h1>{t('welcome')}</h1>
        </div>
        </>
    );
};
