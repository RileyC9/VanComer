import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel"
// const images =["../img/tester.png","../img/tester.png"];

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="mainWrapper">
        <Carousel />
      </div>
      
    </div>
  );
}

export default App;