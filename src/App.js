import HomePage from "./Pages/Homepage/HomePage"
import './App.css';
import Shop from "./Pages/Shop/Shop";
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Route path="/" exact component={HomePage}/>
    <Route path="/shop" exact component={Shop}/>
    </div>
  );
}

export default App;
