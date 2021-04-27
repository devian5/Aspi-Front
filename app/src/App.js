import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './containers/home/Home';
import Register from './containers/register/Register';

import './App.css';
import './css/main.css';
import Login from './containers/login/Login';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/login' exact component={Login}/>
      </Switch>

    </BrowserRouter>

    </div>
  );
}

export default App;
