import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";

const App = () => {
    return (
        <div>
            <Router>
                <Link to={'/posts'}>posts</Link>

                <Route exact path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Router>
        </div>
    )
}

export default App;
