import Posts from "./components/Posts";
import {BrowserRouter as Router, Route, Link,} from 'react-router-dom';
import {RouteComponentProps,} from 'react-router';
import PostDetails from "./components/PostDetails";

const App = () => {
    return (
        <div>
            <Router>
                <Link to={'/posts'}>posts</Link>

                <Route exact path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/posts/:id'} render={(props:RouteComponentProps) => <PostDetails {...props}/>}/>
            </Router>
        </div>
    )
}

export default App;