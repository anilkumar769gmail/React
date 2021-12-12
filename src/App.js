import CartHeader from './components/cartheader';
import './App.css';
import CartFooter from './components/cartfooter';
import CartItems from './components/cartitems';
import AddItem from './components/additem';

function App() {

  return (
    <div>
      <CartHeader/>
       <CartItems/>
       <AddItem/>
      <CartFooter/>
    </div>
  );
  
}


export default App;
