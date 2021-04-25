import Home from './pages/Home/index';

import GlobalStyle from './assets/globalStyles';
import SelectedMovieProvider from './store/SelectedMovieProvider';

function App() {
  return (
    <div className="App">
      <SelectedMovieProvider>
        <GlobalStyle />
        <Home />
      </SelectedMovieProvider>
    </div>
  );
}

export default App;
