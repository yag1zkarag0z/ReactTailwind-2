import './App.css'
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Cards from './components/Cards/Cards.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';
import Footer from './components/Footers/Footer.jsx';
import Analytics from './components/Analytics/Analytics.jsx';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  )
}

export default App
