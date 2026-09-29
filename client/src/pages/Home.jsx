import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Hero from "../sections/Hero";
import TrustedBy from "../sections/TrustedBy";
import ServicesPreview from "../sections/ServicesPreview";
import AboutPreview from "../sections/AboutPreview";
import VisualStrip from "../sections/VisualStrip";
import WhyChooseUs from "../sections/WhyChooseUs";
import WorkProcess from "../sections/WorkProcess";
import TechStack from "../sections/TechStack";
import PortfolioPreview from "../sections/PortfolioPreview";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import ContactPreview from "../sections/ContactPreview";
import { getProjects, getServices, getTestimonials } from "../services/api";
import { fallbackProjects, fallbackServices, fallbackTestimonials } from "../data/fallback";

export default function Home() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getServices(), getProjects(), getTestimonials()])
      .then(([s, p, t]) => {
        setServices(s.data.data.services);
        setProjects(p.data.data.projects);
        setTestimonials(t.data.data.testimonials);
      })
      .catch(() => {
        setServices(fallbackServices);
        setProjects(fallbackProjects);
        setTestimonials(fallbackTestimonials);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageTransition>
      <SEO
        title="HNitSolutions | Build. Grow. Scale."
        description="Premium software, websites, mobile apps and digital growth systems from HNitSolutions."
        path="/"
      />
      <Hero />
      <TrustedBy />
      <ServicesPreview services={services} loading={loading} />
      <AboutPreview />
      <VisualStrip />
      <WhyChooseUs />
      <WorkProcess />
      <TechStack />
      <PortfolioPreview projects={projects} loading={loading} />
      <Testimonials testimonials={testimonials} loading={loading} />
      <CTA />
      <ContactPreview />
    </PageTransition>
  );
}
