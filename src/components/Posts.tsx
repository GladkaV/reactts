import {useEffect, useState} from "react";
import {IPost} from "../models/IPost";
import {getPosts} from "../service/getPosts";
import Post from "./Post";

const Posts = () => {
    let [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data));
    }, [])

    return (
        <div>
            {
                posts.map(post => <Post {...post} key={post.id}>
                    <button>details</button>
                </Post>)
            }
        </div>
    )
}

export default Posts;