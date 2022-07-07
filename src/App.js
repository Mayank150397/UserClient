import './App.css'
import Homepage from "./Component/homepage/homepage"
import SignIn from "./Component/SignIn/signin"
import SignUp from "./Component/SignUp/signup"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setSigninUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setSigninUser} /> : <register setSigninUser={setSigninUser}/>
            }
          </Route>
          <Route path="/Signin">
            <SignIn setLoginUser={setSigninUser}/>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;