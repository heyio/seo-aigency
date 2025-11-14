'use client';

import { useState } from 'react';
import Navigation from '../components/organisms/navigation';
import Hero from '../components/organisms/hero';
import FAQ from '../components/organisms/faq';
import Footer from '../components/organisms/footer';
import Features from '@/components/organisms/features';
import WhySeoAigency from '@/components/organisms/why-seoaigency';
import Pricing from '@/components/organisms/pricing';
import Flow from '@/components/organisms/flow';

export default function LandingPage() {
  const [selectedPlan, setSelectedPlan] = useState('');
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Flow />
      <WhySeoAigency />
      {/*
      <Pricing selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <GoogleRanking />
      <TwoColumnSection />
      <Testimonials />
      <Ratings />
      <TargetAudience />
      <DriveCustomers />
      <WhyChooseUs /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
