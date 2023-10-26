import { useEffect } from 'react';
import './App.css';
import {Page_Home, Page_Checkout, Page_Login, Page_Payment} from './Page';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from './FirebaseConfig';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/checkout' Component={Page_Checkout}/>
          
          <Route path='/login' Component={Page_Login}/>

          <Route path='/' Component={Page_Home}/>

          <Route path='/payment' Component={Page_Payment}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
