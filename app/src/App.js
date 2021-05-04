import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './containers/home/Home';
import Register from './containers/register/Register';
import Login from './containers/login/Login';
import Profile from './containers/profile/Profile';
import DoubleMeaning from './containers/doubleMeaning/DoubleMeaning';
import FellingCollection from './containers/feelingCollection/FellingCollection';

import './App.css';
import './css/main.css';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/double-meaning' exact component={DoubleMeaning}/>
        <Route path='/feeling' exact component={FellingCollection}/>
      </Switch>

    </BrowserRouter>

    </div>
  );
}

export default App;
