import {useLocation} from "react-router-dom";

import {IPost} from "../models/IPost";

const PostDetails = () => {
    let {state} = useLocation<IPost>();
    console.log(state)

    return (
        <div>
            posts details
        </div>
    )
}

export default PostDetails;
