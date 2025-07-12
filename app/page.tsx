import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Calculator from './components/Calculator/Calculator';
import Services from './components/Services/Services';
import Trust from './components/Trust/Trust';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Calculator />
      <Services />
      <Trust />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}
