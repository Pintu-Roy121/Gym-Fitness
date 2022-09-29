// import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import GymContainer from './components/GymContainer/GymContainer';
import Questions from './components/Questions/Questions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <GymContainer />
      <Questions />
      <ToastContainer />
    </div>
  );
}

export default App;
