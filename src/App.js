import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from "./components/NavBar";
import Footer from "../src/components/Footer";
import ClientSignUp from "./components/accounts/SignUp";
import JobSeekerSignUp from "./components/accounts/JobSeekerSignUP";
import Login from "./components/accounts/Login";
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import RoleSelectionPop from './components/accounts/RoleSelectionPop';
// import ClientPage from "./components/ClientPage"

function App() {
  // const [states, setStates] = useState({
  //   signUpPopDisplay: false
  // })
  const [role, setRole] = useState();
  const [roleShow, setRoleShow] = useState(false);
  const handleRoleShow = () => setRoleShow(true);
  const handleRoleShowClose = () => setRoleShow(false);
  const handleRoleSelection = () => {
    setRole("client");
    handleSignUpShow()
    handleRoleShowClose();
  };
  
  const handleJobSeekerRoleSelection = () => {
    setRole("JobSeeker");
    handleSignUpShow();/*change to job seeker signup pop later*/ 
    handleRoleShowClose()
  };

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
        handleRoleShow={handleRoleShow}
        handleLogInShow={handleLogInShow}/>
      </header>
      <RoleSelectionPop 
      roleShow = {roleShow}
      handleRoleShowClose = {handleRoleShowClose}
      handleRoleSelection = {handleRoleSelection}
      handleJobSeekerRoleSelection = {handleJobSeekerRoleSelection}/>
      {(role == "client"? <ClientSignUp 
      signUpShow= {signUpShow}
      setSignUpShow = {setSignUpShow}
      handleSignUpClose={handleSignUpClose}/> : <JobSeekerSignUp 
      signUpShow= {signUpShow}
      setSignUpShow = {setSignUpShow}
      handleSignUpClose={handleSignUpClose}/>)}
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