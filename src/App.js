import './App.css';
import {Page_Home, Page_Checkout} from './Page';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/checkout' Component={Page_Checkout}/>
          
          <Route path='/' Component={Page_Home}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
