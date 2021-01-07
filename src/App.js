import HomePage from "./Pages/Homepage/HomePage"
import './App.css';
import Shop from "./Pages/Shop/Shop";
import {Route} from 'react-router-dom';
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
    <Header/>
    <Route path="/" exact component={HomePage}/>
    <Route path="/shop" exact component={Shop}/>
    </div>
  );
}

export default App;
