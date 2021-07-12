import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Trending from './bse/Trending';
import Gainers from './bse/Gainers';
import Losers from './bse/Losers';
import Home from './bse/Home';
import Navbar from './bse/Navbar';


function App() {
  return (

    <div >
      <Navbar />
      <div>

        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/trending' ><Trending /></Route>
          <Route path='/gainers' > <Gainers /> </Route>
          <Route path='/losers' > <Losers /> </Route>
        </Switch>
      </div>


    </div>

  );
}

export default App;
