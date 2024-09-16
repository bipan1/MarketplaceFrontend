
import { Outlet } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
