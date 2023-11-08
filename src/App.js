import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from "./components/NavBar";
import Footer from "../src/components/Footer";
import SignUp from "./components/accounts/SignUp";
import Login from "./components/accounts/Login";
import Home from './components/pages/Home';
import Error from './components/pages/Error';
// import ClientPage from "./components/ClientPage"

function App() {
  // const [states, setStates] = useState({
  //   signUpPopDisplay: false
  // })
  const [signUpShow, setSignUpShow] = useState(false);
  const [logInShow, setLogInShow] = useState(false);
  const handleSignUpShow = () => setSignUpShow(true);
  const handleSignUpClose = () => setSignUpShow(false);
  const handleLogInShow = () => setLogInShow(true);
  const handleLogInClose = () => setLogInShow(false);
  // localStorage.setItem('states', JSON.stringify(states));
  return (
    <div className="App">
      <header className="App-header">
        <NavBar 
        handleSignUpShow={handleSignUpShow}
        handleLogInShow={handleLogInShow}/>
      </header>
        <SignUp 
        signUpShow= {signUpShow}
        setSignUpShow = {setSignUpShow}
        handleSignUpClose={handleSignUpClose}/>
        <Login 
        logInShow= {logInShow}
        setLogInShow = {setLogInShow}
        handleLogInClose={handleLogInClose}/>
      {/* <Home /> */}
        {/* <BrowserRouter> */}
        <div className="mainWrapper">
          <Routes>
            <Route path='/' element={<Home />} exact />
            {/* <Route path='/aboutus' component={About} /> */}
            {/* <Route path='/clientpage' component={ClientPage} /> */}
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        {/* </BrowserRouter> */}
      <Footer/>
    </div>
  );
}

export default App;