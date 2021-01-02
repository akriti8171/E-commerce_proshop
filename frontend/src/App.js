import {Container} from 'react-bootstrap'
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import ProfileScreen from './screens/ProfileScreen'
import OrderScreen from './screens/orderScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import{BrowserRouter,Route} from 'react-router-dom'
import UserListScreen from "./screens/UserListScreen"
import UserEditScreen from "./screens/UserEditScreen"
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

function App() {
  return (
    <BrowserRouter>
      <Header />
        <main className="py-5">
          <Container>
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route path='/admin/productlist' component={ProductListScreen}bexact />
            <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
            <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
            <Route path='/admin/orderlist' component={OrderListScreen} />
            <Route path='/search/:keyword' component={HomeScreen} exact />
            <Route path='/page/:pageNumber' component={HomeScreen} exact />
            <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
            <Route path="/" component={HomeScreen} exact />
          </Container>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
