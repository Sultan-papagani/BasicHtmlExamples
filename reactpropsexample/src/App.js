import logo from './logo.svg';
import './App.css';
import KullaniciPanosu from './KullaniciPanosu';

function App() {

  const ogrenci = {
    "ad":"Ahmet",
    "yas":"78",
    "aktiflik":true,
    "hobiler":["kitap okumak", "balık tutmak", "uyumak"]
  }

  return (
    <div className="App">
      <KullaniciPanosu Ogrenci={ogrenci}/>
    </div>
  );
}

export default App;
