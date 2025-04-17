
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MLMetrics from "@/components/MLMetrics";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  // Add scroll animation effect for elements
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });
    
    const hiddenElements = document.querySelectorAll(".animate-fade-in");
    hiddenElements.forEach(el => observer.observe(el));
    
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="text-github-text min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <MLMetrics />
      <Skills />
      <Certifications />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
