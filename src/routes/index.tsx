import {Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../pages/home';


const AuthorizedRoutes: React.FC = () => {
  const history = createBrowserHistory({ basename: '/home' });
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default AuthorizedRoutes;