import { createBoard } from '@wixc3/react-board';
import { Share } from '../../../components/share/share';

export default createBoard({
    name: 'Share',
    Board: () => <Share />
});
