import logo from './logo.svg';
import './App.css';
import MovieApp from './components/MovieApp';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className="App">

      <MovieApp />
      <Footer />
    </div>
  );
}

export default App;
