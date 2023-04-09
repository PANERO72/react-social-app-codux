import { createBoard } from '@wixc3/react-board';
import { Post } from '../../../components/post/post';

export default createBoard({
    name: 'Post',
    Board: ({id, desc, photo, date, userI, like, comment}) => <Post id={id} desc={desc} photo={photo} date={date} userId={userI} like={like} comment={comment} />
});
