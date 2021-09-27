import {IPost} from "../models/IPost";
import {FC} from "react";
import {Link} from 'react-router-dom';

const Post: FC<IPost> = (props: IPost) => {
    let {id, title, body, userId} = props;

    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>

            <Link to={{pathname: '/posts/' + id, state: {id, userId, title, body}}}>details</Link>
        </div>
    )
}

export default Post;
