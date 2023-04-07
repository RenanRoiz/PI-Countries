import NavBar from "./Components/Navbar/Navbar";
import {Detail, Form, Home, Landing} from "./Views/index"
import { Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={()=> <Landing />} />
      <Route path="/countries" render={()=> <Home />} />
      <Route path="/countries/:id" render={()=> <Detail />}/>
      <Route path="/activities" render={()=> <Form />}/>
    </div>
  );
}

export default App;
