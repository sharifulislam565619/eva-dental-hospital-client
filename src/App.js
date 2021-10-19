import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import NotFound from './components/Home/NotFound/NotFound';
import PrivateRoute from './components/Home/Private/PrivateRoute';
import Register from './components/Home/Register.js/Register';
import ServiceDetail from './components/Home/ServiceDetails/ServiceDetail';
import Footer from './components/Home/Shared/Footer/Footer';
import Header from './components/Home/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
