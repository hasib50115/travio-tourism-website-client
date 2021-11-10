import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MyOrder from './components/MyOrder/MyOrder';
import Booking from './components/Booking/Booking';
import MyOrders from './components/MyOrders/MyOrders';
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/home'>
              <HomePage></HomePage>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/order'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path='/myorderss'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute exact path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path='/myorder'>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path='/admin'>
              <AdminDashBoard></AdminDashBoard>
            </Route>

            <Route exact path="/">
              <HomePage></HomePage>
            </Route> 
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
