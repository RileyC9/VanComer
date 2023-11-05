import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel"
import { Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="mainWrapper">
        <Carousel />
        {/* <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/aboutus' component={About} />
        <Route component={Error} />
        </Switch> */}
      </div>
      
    </div>
  );
}

export default App;