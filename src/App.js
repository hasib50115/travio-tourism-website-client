import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <HomePage></HomePage>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route> 
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
