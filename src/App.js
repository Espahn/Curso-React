import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
                <ItemListContainer/>
          </Route>
            <Route path="/category/:category">
                <ItemListContainer/>
            </Route>
            <Route path="/item/:id">
                <ItemDetailContainer />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
