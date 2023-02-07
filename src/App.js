import './App.css';
import { Route, Routes } from 'react-router-dom';

import ModalLogin from './components/Login/ModalLogin';
import Home from './components/Home/Home';

import { ModalProvider } from './components/Modal/modalcontext';
function App() {
  return (

    <div className="App">
      <ModalProvider  >
        <Routes>
          <Route path='/' element={<ModalLogin />} />
          <Route path='/home/:id' element={<Home />} />
        </Routes>


      </ModalProvider>
    </div>
  );
}

export default App;
