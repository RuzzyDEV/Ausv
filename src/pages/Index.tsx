import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Location />
      <CTA />
      <Footer />
      <WhatsAppFloat />
      <InstagramFloat />
    </main>
  );
};

export default Index;
