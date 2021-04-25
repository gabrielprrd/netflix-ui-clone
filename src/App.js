// Pages
import Home from './pages/Home/index';
import Register from './pages/Register/index';

// Routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Style
import GlobalStyle from './assets/globalStyles';

// Context
import SelectedMovieProvider from './store/SelectedMovieProvider';

function App() {
  return (
    <div className="App">
      <SelectedMovieProvider>
        <GlobalStyle />
        <Router>
          <div>
            <Switch>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </SelectedMovieProvider>
    </div>
  );
}

export default App;
