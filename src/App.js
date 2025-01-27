// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { EmiCalculator } from './components/EMI-Calculator/emi-calculator';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <header className='bg-dark d-flex justify-content-around text-white p-2'>
        <div className='fs-5 fw-bold'>Shopper.</div>
        <div className='fs-4'>
          <Link to="/" className='link-light text-decoration-none'>Home</Link>
          <Link to="men" className='link-light text-decoration-none mx-3'> Men's Fashion </Link>
          <Link to="women" className='link-light text-decoration-none mx-3'> women's Fashion </Link>
          <Link to="kids" className='link-light text-decoration-none'> Kid's Fashion </Link>
          <Link to="emi" className='link-light mx-2 text-decoration-none'> EMI </Link>
        </div>
        <div>
          <span className='bi bi-person-fill'></span>
          <span className='bi bi-heart-fill mx-3'></span>
          <span className='bi bi-cart'></span>
        </div>
      </header>
      <section className='mt-4'>
        <Routes>
          <Route path='/' element={<div><h1>Welcome to online shopping</h1><p>Men's | Women's | Kids Fashion</p></div>} />
          <Route path='men' element={<div><h3>Men's Fashion</h3><img src="iphone-black.jpg" width="200" height="200" /></div>} />
          <Route path='women' element={<div><h3>Women's Fashion</h3><img src="iphone-black.jpg" width="200" height="200" /></div>} />
          <Route path='kids' element={<div><h3>Kids's Fashion</h3><img src="iphone-black.jpg" width="200" height="200" /></div>} />
          <Route path='emi' element={<EmiCalculator />}/>
          <Route path='*' element={<div><h3 className='text-warning'>Looking for something?</h3><code>Sorry unable to find your request</code></div>} />
        </Routes>
      </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
