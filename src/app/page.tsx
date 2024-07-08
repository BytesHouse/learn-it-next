import Career from "@/components/Career/Career";
import Certifications from "@/components/Certifications/Certifications";
import Features from "@/components/Features/Features";
import Feedback from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Improoves from "@/components/Improoves/Improoves";
import Intro from "@/components/Intro/Intro";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Intro />
      <Features />
      <Improoves />
      <Feedback />
      <Career />
      <Certifications />
      <Footer />
    </div>
  );
}
