import {Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../pages/home';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Details from '../pages/details';



const AuthorizedRoutes: React.FC = () => {
  const history = createBrowserHistory({ basename: '/home' });
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/details'>
          <Details/>
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  )
}

export default AuthorizedRoutes;