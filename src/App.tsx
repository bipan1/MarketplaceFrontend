
import { Outlet } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
