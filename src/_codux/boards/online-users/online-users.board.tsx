import { createBoard } from '@wixc3/react-board';
import { OnlineUsers } from '../../../components/online-users/online-users';

export default createBoard({
    name: 'OnlineUsers',
    Board: () => <OnlineUsers />
});
