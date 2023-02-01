import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/detail/:productId' component={Detail} />
    </Switch>
  );
}

export default App;
