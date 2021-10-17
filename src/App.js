import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Service/Service';
import ServiceDetail from './components/Home/ServiceDetails/ServiceDetail';
import Header from './components/Home/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/services/:id">
            <ServiceDetail></ServiceDetail>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
