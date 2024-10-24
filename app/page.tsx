'use client';

import { useState } from 'react';
import Navigation from '../components/organisms/navigation';
import Hero from '../components/organisms/hero';
import Services from '../components/organisms/services';
import GoogleRanking from '../components/organisms/googleranking';
import Testimonials from '../components/organisms/testimonials';
import Ratings from '../components/organisms/ratings';
import TargetAudience from '../components/organisms/targetaudience';
import DriveCustomers from '../components/organisms/drivecustomers';
import WhyChooseUs from '../components/organisms/whychooseus';
import Pricing from '../components/organisms/pricing';
import FAQ from '../components/organisms/faq';
import Footer from '../components/organisms/footer';
import TwoColumnSection from '@/components/organisms/twocolumnsection';

export default function LandingPage() {
  const [selectedPlan, setSelectedPlan] = useState('basic');

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <GoogleRanking />
      <TwoColumnSection />
      <Testimonials />
      <Ratings />
      <TargetAudience />
      <DriveCustomers />
      <WhyChooseUs />
      <Pricing selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <FAQ />
      <Footer />
    </div>
  );
}
