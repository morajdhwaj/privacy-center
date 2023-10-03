import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home-page/HomePage';
import RequestPage from './pages/request-page/RequestPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/request' element={<RequestPage />} />
      </Routes>
    </div>
  );
}

export default App;
