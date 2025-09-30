import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import ContactButton from "@/components/ContactButton";
import ContactSection from "@/components/ContactSection";
import ClientCarousel from "@/components/ClientCarousel";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import TopSolutions from "@/components/TopSolutions";
export default function Home() {
  return (
    <div className="homeCont">
      <Nav />
      {/* Hero */}
      <div className="homeHero">
        <div className="homeHeroImageCont">
          <Image src="/homeHero.png" alt="homeHero" fill={true} style={{objectFit: "cover"}} placeholder="blur" blurDataURL="/homeHeroPixel.png" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" />
        </div>
        <div className="homeHeroTextCont">
          <h1>Rizzazzle Repairs</h1>
          <Image src="/RRLogo.png" alt="homeHero" width={200} height={200} />
          <p>Providing AV Installations, electronic repairs, and general maintenance to the greater Denver area and beyond&#33;</p>
          <ContactButton />
        </div>
      </div>
      {/* Services */}
      <TopSolutions />
      {/* Contact */}
      <ContactSection />
      {/* Expertise */}
      <div className="homeExpertise">
        <hr className="homeExpertiseHR" />
        <div className="homeExpertiseGridCont">
          <div className="homeExpertiseTop">
            <div className="homeExpertiseTopLeftCont">
              <div className="homeExpertiseTopLeft">
                <h2>Our Expertise</h2>
                <Image src="/sectionIcon.png" alt="homeExpertise" className="homeExpertiseTopLeftIcon" width={50} height={50} />
              </div>
            </div>
            <div className="homeExpertiseTopRight">
              <h3>Where We Excel</h3>
              <p>Delivering exceptional service solutions tailored to different sectors</p>
            </div>
            <div></div>
          </div>
          <div className="homeExpertiseCardsGrid">
            <div className="homeExpertiseCard">
              <div className="homeExpertiseCardInner">
                <h3>Homes</h3>
                <p>Customized services for residential properties</p>
              </div>
            </div>
            <div className="homeExpertiseCard">
              <div className="homeExpertiseCardInner">
                <h3>Businesses</h3>
                <p>Customized solutions for commercial entities</p>
              </div>
            </div>
            <div className="homeExpertiseCard">
              <div className="homeExpertiseCardInner">
                <h3>Industrial</h3>
                <p>Specialized services catering to industrial applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Expertise Images */}
      <div className="homeExpertiseImages">
        <div className="homeExpertiseImagesGrid">
          <div></div>
          <div className="homeExpertiseImagesGridItem">
            <Image src="/expertiseImage2.png" alt="homeExpertiseImage" fill style={{objectFit: "cover"}}  />
          </div>
          <div className="homeExpertiseImagesCenter2">
            <Image src="/expertiseImage1.png" alt="homeExpertiseImage" fill style={{objectFit: "cover"}}  />
          </div>
        </div>
        <div className="homeExpertiseImagesCenter">
          <div className="homeExpertiseImagesCenterImage">
            <Image src="/expertiseImage1.png" alt="homeExpertiseImage" fill style={{objectFit: "cover"}}  />
          </div>
        </div>
      </div>
      {/* Client Carousel */}
      <ClientCarousel />
      {/* Testimonials */}
      <Testimonials />
      {/* Footer */}
      <Footer />
    </div >
  );
}
