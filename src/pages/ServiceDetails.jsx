import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import ServiceHero from '../components/service/ServiceHero';
import ServiceQuickFacts from '../components/service/ServiceQuickFacts';
import ServiceOverview from '../components/service/ServiceOverview';
import ServiceHighlights from '../components/service/ServiceHighlights';
import ServiceApplications from '../components/service/ServiceApplications';
import ServiceProcess from '../components/service/ServiceProcess';
import ServiceTechnicalGuide from '../components/service/ServiceTechnicalGuide';
import ServiceGallery from '../components/service/ServiceGallery';
import ServiceFaq from '../components/service/ServiceFaq';
import RelatedServices from '../components/service/RelatedServices';
import ServiceCta from '../components/service/ServiceCta';
import NotFound from './NotFound';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      // Dynamic SEO document title
      document.title = service.seo?.title || `${service.title} in Visakhapatnam | Koneti Borewells`;
      
      // Dynamic meta description
      let metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc && service.seo?.description) {
        metaDesc.setAttribute('content', service.seo.description);
      }

      // Canonical link update
      let canonicalLink = document.querySelector("link[rel='canonical']");
      if (canonicalLink && service.seo?.canonical) {
        canonicalLink.setAttribute('href', service.seo.canonical);
      }

      // Scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [slug, service]);

  if (!service) {
    return <NotFound />;
  }

  return (
    <main className="main-content">
      {/* 1. Service Hero with Breadcrumbs & Single H1 */}
      <ServiceHero service={service} />

      {/* 2. Technical Quick Facts Table */}
      <ServiceQuickFacts facts={service.quickFacts} />

      {/* 3. Deep Service Overview Narrative with Uncropped Side Visual */}
      <ServiceOverview overview={service.overview} sideImage={service.sideImage} />

      {/* 4. Core Engineering Highlights */}
      <ServiceHighlights highlights={service.highlights} />

      {/* 5. Target Applications: Who It's For */}
      <ServiceApplications applications={service.applications} />

      {/* 6. Step-by-Step Field Process (Custom to this service) */}
      <ServiceProcess processSteps={service.process} />

      {/* 7. Field Technical Guide & Knowledge Advisory */}
      <ServiceTechnicalGuide guide={service.technicalGuide} />

      {/* 8. Service-Specific Field Gallery with Lightbox */}
      <ServiceGallery gallery={service.gallery} serviceTitle={service.shortTitle} />

      {/* 9. Service-Specific FAQ Accordion */}
      <ServiceFaq faqs={service.faqs} serviceTitle={service.shortTitle} />

      {/* 10. Related Services Cross-Links */}
      <RelatedServices currentSlug={service.slug} relatedSlugs={service.relatedSlugs} />

      {/* 11. Dynamic Quote Call-To-Action with WhatsApp Builder */}
      <ServiceCta service={service} />
    </main>
  );
}
