import { createBoard } from '@wixc3/react-board';
import { RightBar } from '../../../components/right-bar/right-bar';

export default createBoard({
    name: 'RightBar',
    Board: () => <RightBar />
});
