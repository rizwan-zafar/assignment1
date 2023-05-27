import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import About from './Components/About'
import Header from './Components/Header'
 import "./App.css"
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const data = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      address: '123 Main St, City, Country'
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'secret456',
      address: '456 Elm St, City, Country'
    },
    {
      name: 'test',
      email: 'test@test.com',
      password: '123',
      address: '789 Oak St, City, Country'
    }
  ];
  
  
  
  const [users,setUsers]=React.useState(data)
   return (
    <div>
      <Router>
        <Header />
        <div>

          <Switch>
            <Route exact path="/" render={() => <Login users={users} />} />
            <Route path="/about" component={About} />
            <Route path="/home" render={() => <Home users={users} />} />
            <Route path="/signup" render={() => <Signup onData={users} setData={setUsers} />}  />
          </Switch>
        </div>
       </Router>
    </div>
  );
}

export default App;
