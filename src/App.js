import CartHeader from './components/cartheader';
import './App.css';
import CartFooter from './components/cartfooter';
import CartItems from './components/cartitems';

function App() {
  
  return (
    <div>
      <CartHeader/>
      <CartItems/>
      <CartFooter/>
    </div>
  );
}


export default App;
