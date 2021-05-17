import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./component/Home/Home";
import Users from "./component/users/Users";
import UsersDetails from "./component/users-details/UsersDetails";



function App() {
  return (
      <Router>

    <div >
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to={{pathname: '/users', search: '?page=1'}}>users page</Link></li>
        <li><Link to="/post">POST</Link></li>
      </ul>

      <hr/>
        <Switch>
      <Route exact path={'/'}>
        <Home/>
      </Route>
          <Route exact path={'/users'} component={Users}/>
          <Route exact path={'/users/:id'} component={UsersDetails}/>

        </Switch>
      <hr/>

      <div>
        <button><Link to='/'>Back</Link></button>
        <button><Link to='/users'>Forward</Link></button>

      </div>

    </div>

        </Router>
  );
}

export default App;
