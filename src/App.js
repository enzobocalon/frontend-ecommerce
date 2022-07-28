
import './App.css';
import Header from './Components/Header/Header';
import CartProvider from './Context/CartContext';
import Commerce from './Components/Commerce/Commerce';
import ModalProvider from './Context/ModalContext'

function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <Header />
        <Commerce />
        <footer>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/enzobocalon" target='__blank'>Enzo Bocalon</a>.</footer>
      </ModalProvider>
    </CartProvider>
  );
}

export default App;
