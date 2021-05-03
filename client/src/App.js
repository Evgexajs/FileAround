import React, {useEffect} from 'react';
import './style/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu.jsx'
import Profile from './components/Profile.jsx'
import Settings from './components/Settings.jsx'
import Registration from './components/Registation.jsx';
import Login from './components/Login.jsx';
import { useDispatch } from 'react-redux';
import { Auth } from './actions/authAction';
import Files from './components/disk/Files.jsx';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Auth())
  }, []);
  return (
    <BrowserRouter>
      <div className="main">
          <Menu />
          <div className="main__center">
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/settings' component={Settings}/>
          <Route path='/registration'  component={Registration}/>
          <Route path='/login'  component={Login}/>
          <Route path='/files'  component={Files}/>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
