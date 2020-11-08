import './App.css';
import withAlerts from '@weareluastudio/lualert'
// ROUTER
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTES
import Home from './Pages/Home.js' 

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default withAlerts(App);
