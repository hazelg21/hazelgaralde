import './App.css';
import FooterPage from './Components/foot';
import AppNavbar from './Components/navbar';
import AboutPage from './Pages/about';
import ContactPage from './Pages/contact';
import HomePage from './Pages/home';
import PortfolioPage from './Pages/portfolio';
import Techstack from './Pages/techstack';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar />
      </header>
      <main className="App-main">
        <HomePage />
        <PortfolioPage />
        <AboutPage />
        <Techstack />
        <ContactPage />
        <FooterPage />
      </main>
    </div>
  );
}

export default App;
