import {Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../pages/home';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Details from '../pages/details';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../services/queryClient';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';




const AuthorizedRoutes: React.FC = () => {
  const history = createBrowserHistory({ basename: '/home' });
  return (
    
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
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
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ThemeProvider>
  )
}

export default AuthorizedRoutes;