import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { FAQ } from "../ui/faq";
import Features from "../ui/featuresPage";
import Hero from "../ui/heroPage";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      {/* <Pricing /> */}
      <FAQ />
      <Footer />
    </>
  );
}

export default LandingPage;
