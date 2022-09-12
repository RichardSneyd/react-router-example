import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About </Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        {/* Switch is replaced by Routes in v6 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <><h2>Home Page</h2></>
}

function About() {
  return <h2>About Page</h2>
}

function Services() {
  return <h2>Services Page</h2>
}

function Contact() {
  return <h2>Contact Page</h2>
}

export default App;
