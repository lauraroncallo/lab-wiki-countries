import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import CountriesList from "./Components/CountriesList";
import CountryDetails from "./Components/CountryDetails";
import {Switch, Route} from "react-router-dom";

function App() {
  return (<div className="App">
  <NavBar/>
  <CountriesList />
    <Switch>  
    <Route exact path="/" component={CountriesList} />
    <Route path="/countries/:alpha3Code" component={CountryDetails} />
     <Route path="/countries/:alpha3Code" component={CountryDetails} />
     
    </Switch>


  </div>
  )
};

export default App;
