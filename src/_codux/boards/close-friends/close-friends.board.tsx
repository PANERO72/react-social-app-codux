import { createBoard } from '@wixc3/react-board';
import { CloseFriends } from '../../../components/close-friends/close-friends';

export default createBoard({
    name: 'CloseFriends',
    Board: () => <CloseFriends />
});
