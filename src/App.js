import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <div className='baap'>
    <Router>
       <Home/>
    </Router>
    </div>
  );
}

export default App;
