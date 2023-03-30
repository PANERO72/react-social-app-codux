import { createBoard } from '@wixc3/react-board';
import { Feed } from '../../../components/feed/feed';

export default createBoard({
    name: 'Feed',
    Board: () => <Feed />,
    environmentProps: {
        windowWidth: 1020,
    },
});
