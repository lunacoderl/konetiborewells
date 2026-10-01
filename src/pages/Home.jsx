import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustRibbon from '../components/home/TrustRibbon';
import AboutSection from '../components/home/AboutSection';
import GeologicalStrataSection from '../components/home/GeologicalStrataSection';
import ServicesOverviewSection from '../components/home/ServicesOverviewSection';
import ProcessTimelineSection from '../components/home/ProcessTimelineSection';
import FullWidthCtaBreak from '../components/home/FullWidthCtaBreak';
import FieldGallerySection from '../components/home/FieldGallerySection';
import WhoWeServeSection from '../components/home/WhoWeServeSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GoogleReviewsSection from '../components/home/GoogleReviewsSection';
import ServiceAreasSection from '../components/home/ServiceAreasSection';
import FaqSection from '../components/home/FaqSection';
import ContactActionSection from '../components/home/ContactActionSection';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function Home() {
  useEffect(() => {
    // Dynamic SEO for Homepage
    document.title = 'Koneti Borewells & Motors | Borewell Drilling in Visakhapatnam';
    
    // Ensure canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://www.konetiborewellsvizag.com/');
    }

    // Scroll to hash if present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="main-content">
      {/* 1. HERO "Reliable Water Starts Beneath the Surface" */}
      <HeroSection />

      {/* 2. MICRO TRUST STRIP */}
      <TrustRibbon />

      {/* 3. ABOUT "Built Around the Ground Beneath Vizag" */}
      <AboutSection />

      {/* 4. GEOLOGICAL / DRILLING VISUAL "From Surface to Water" */}
      <GeologicalStrataSection />

      {/* 5. SERVICES "From Groundbreaking to Groundwater" */}
      <ServicesOverviewSection />

      {/* 6. PROCESS "A Clear Process From Site to Solution" */}
      <ProcessTimelineSection />

      {/* 7. FULL-WIDTH CTA BREAK "Looking for Water Below the Surface?" */}
      <FullWidthCtaBreak />

      {/* 8. GALLERY "Work That Happens on the Ground" */}
      <FieldGallerySection />

      {/* 9. WHO WE SERVE (Home, Farm, Business, Project) */}
      <WhoWeServeSection />

      {/* 10. CUSTOMER TESTIMONIALS */}
      <TestimonialsSection />

      {/* 11. GOOGLE REVIEWS SECTION */}
      <GoogleReviewsSection />

      {/* 12. SERVICE AREAS "Serving Visakhapatnam & Surrounding Areas" */}
      <ServiceAreasSection />

      {/* 13. FAQ SECTION */}
      <FaqSection />

      {/* 14. CONTACT ACTION & QUOTE BUILDER "Let's Talk About Your Water Requirement" */}
      <ContactActionSection />

      {/* 15. FINAL CTA "Your Next Borewell Starts With One Conversation" */}
      <FinalCtaSection />
    </main>
  );
}
