import CreateComponent from './create';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {useState} from "react";


function App() {
  
  const [members,setMembers] = useState([
    {
        name:'xyz',
        score: 123,
        img:''
    }
]);
  return (
     <Router>
         <div className="App">
           <Navbar/>
           <div className="content">
              <Switch>
                  <Route exact path="/">
                     <Home
                     members={members}
                     setMembers={setMembers}
                     />
                  </Route>
                  <Route path="/create">
                     <CreateComponent
                                          members={members}
                                          setMembers={setMembers}
                     />
                  </Route>
              </Switch>
           </div>
      
         </div>
     </Router>
  );
}

export default App;
