'use client';

import Navigation from '../components/organisms/navigation';
import Hero from '../components/organisms/hero';
import Services from '../components/organisms/services';
import FAQ from '../components/organisms/faq';
import Footer from '../components/organisms/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      {/* <GoogleRanking />
      <TwoColumnSection />
      <Testimonials />
      <Ratings />
      <TargetAudience />
      <DriveCustomers />
      <WhyChooseUs />
      <Pricing selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
