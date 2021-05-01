// Pages
import Home from './pages/Home/index';
import Register from './pages/Register/index';
import Movie from './pages/Movie/index';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/watch/:id">
                <Movie />
              </Route>
              <Route exact path="/">
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
