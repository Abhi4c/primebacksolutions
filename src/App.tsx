import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesMarketing } from './components/ServicesMarketing';
import { ActuarialSupport } from './components/ActuarialSupport';
import { SocialMedia } from './components/SocialMedia';
import { Work } from './components/Work';
import { Clients } from './components/Clients';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesMarketing />
        <ActuarialSupport />
        <SocialMedia />
        <Work />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}