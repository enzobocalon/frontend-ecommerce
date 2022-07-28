
import './App.css';
import Header from './Components/Header/Header';
import CartProvider from './Context/CartContext';
import Commerce from './Components/Commerce/Commerce';
import FlexGallery from './Components/FlexGallery/FlexGallery';
import ModalProvider from './Context/ModalContext'

function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <Header />
        <Commerce />
      </ModalProvider>
    </CartProvider>
  );
}

export default App;
