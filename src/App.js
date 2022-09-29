// import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import GymContainer from './components/GymContainer/GymContainer';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div>
      <GymContainer />
      <Questions />
    </div>
  );
}

export default App;
