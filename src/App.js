import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home-page/HomePage';
import RequestPage from './pages/request-page/RequestPage';
import Navbar from './components/navbar/Navbar';
import Preference from './pages/preference-page';
import DparWeb from './pages/dpar-web';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/request' element={<RequestPage />} />
        <Route path='/preference' element={<Preference />} />
        <Route path='/dparwebform' element={<DparWeb />} />
      </Routes>
    </div>
  );
}

export default App;
