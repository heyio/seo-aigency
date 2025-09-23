'use client';

import Navigation from '../components/organisms/navigation';
import Hero from '../components/organisms/hero';
import FAQ from '../components/organisms/faq';
import Footer from '../components/organisms/footer';
import Features from '@/components/organisms/features';
import WhySeoAigency from '@/components/organisms/why-seoaigency';
import Flow from '@/components/organisms/flow';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Flow />
      <WhySeoAigency />
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
