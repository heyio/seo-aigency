'use client';

import Navigation from '../components/organisms/navigation';
import Hero from '../components/organisms/hero';
import Footer from '../components/organisms/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
}
