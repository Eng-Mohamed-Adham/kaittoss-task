import './App.css';
import AboutSection from './Components/AboutSetion';
import FooterSection from './Components/FooterSection';

import Header from './Components/Header';
import HomeSection from './Components/HomeSection';
import OurAppsSection from './Components/OurAppsSection';
import ReviewSection from './Components/ReviewSection';
import ServicesSection from './Components/ServicesSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <ServicesSection />
      <ReviewSection />
      <AboutSection />
      <OurAppsSection />
      <FooterSection />
    </div>
  );
}

export default App;
