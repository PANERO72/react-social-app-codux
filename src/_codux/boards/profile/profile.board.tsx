import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../pages/profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile />
});
