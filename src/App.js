import './App.css';
import {Page_Home, Page_Checkout, Page_Login} from './Page';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/checkout' Component={Page_Checkout}/>
          
          <Route path='/' Component={Page_Home}/>
          
          <Route path='/login' Component={Page_Login}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
