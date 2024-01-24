import Beranda from './components/Beranda';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Kategori from './components/Kategori';
import Produk from './components/Produk';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/kategori" element={<Kategori />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
