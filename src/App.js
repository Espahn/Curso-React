import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartProvider';
import Form from './components/Form';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
                  <ItemListContainer/>
            </Route>
              <Route path="/category/:categoria">
                  <ItemListContainer/>
              </Route>
              <Route path="/item/:id">
                  <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                  <Cart />
              </Route>
              <Route path="/form">
                  <Form />
              </Route>
          </Switch>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
