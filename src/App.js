// Pages
import Home from './pages/Home/index';
import Register from './pages/Register/index';
import Movie from './pages/Movie/index';

// Components
import Footer from './components/Footer/index';
import Header from './components/Header/index';

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
        <Header />
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
        <Footer />
      </SelectedMovieProvider>
    </div>
  );
}

export default App;
