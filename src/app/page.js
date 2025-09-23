import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import ContactButton from "@/components/ContactButton";
import ContactSection from "@/components/ContactSection";
import ClientCarousel from "@/components/ClientCarousel";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="homeCont">
      <Nav />
      {/* Hero */}
      <div className="homeHero">
        <div className="homeHeroImageCont">
          <Image src="/homeHero.jpg" alt="homeHero" fill objectFit="cover" />
        </div>
        <div className="homeHeroTextCont">
          <h1>Rizzazzle Repairs</h1>
          <Image src="/RRLogo.png" alt="homeHero" width={200} height={200} />
          <p>Providing AV Installations, electronic repairs, and general maintenance to the greater Denver area and beyond</p>
          <ContactButton />
        </div>
      </div>
      {/* Services */}
      <div className="homeServices">
        <div className="homeServicesTitle">
          <h2>Top Solutions</h2>
          <p>Repairs, Installs & Maintenance</p>
        </div>
        <div className="homeServicesCardsGrid">
          <div className="homeServicesCardTop">
            <Link href="/services" className="homeServicesCardCont">
              <div className="homeServicesCard">
                <div className="homeServicesCardHoverCont">
                  <div className="homeServicesCardIconCont">
                    <div className="homeServicesCardIcon"></div>
                    <div className="homeServicesCardIcon2"></div>
                    <div className="homeServicesCardIcon3"></div>
                  </div>
                  <div className="homeServicesCardHoverText">
                    <h3>Learn More</h3>
                  </div>
                </div>
                <h3>Digital Signage or TV Mounting</h3>
                <p>Tailored signage and TV solutions for homes and businesses</p>
              </div>
              <div className="homeServicesCardBG"></div>
            </Link>
            <Link href="/services" className="homeServicesCardCont">
              <div className="homeServicesCard">
                <div className="homeServicesCardHoverCont">
                  <div className="homeServicesCardIconCont">
                    <div className="homeServicesCardIcon"></div>
                    <div className="homeServicesCardIcon2"></div>
                    <div className="homeServicesCardIcon3"></div>
                  </div>
                  <div className="homeServicesCardHoverText">
                    <h3>Learn More</h3>
                  </div>
                </div>
                <h3>Security System Installation</h3>
                <p>Expert installation of digital and analog surveillance systems for homes and businesses.</p>

              </div>
              <div className="homeServicesCardBG"></div>
            </Link>
            <Link href="/services" className="homeServicesCardCont">
              <div className="homeServicesCard">
                <div className="homeServicesCardHoverCont">
                  <div className="homeServicesCardIconCont">
                    <div className="homeServicesCardIcon"></div>
                    <div className="homeServicesCardIcon2"></div>
                    <div className="homeServicesCardIcon3"></div>
                  </div>
                  <div className="homeServicesCardHoverText">
                    <h3>Learn More</h3>
                  </div>
                </div>
                <h3>Repairs and Troubleshooting</h3>
                <p>From screen glitches to camera outages, we provide reliable troubleshooting support</p>
              </div>
              <div className="homeServicesCardBG"></div>
            </Link>
          </div>
          <div className="homeServicesCardBottom">
            <Link href="/services" className="homeServicesCardCont">
              <div className="homeServicesCard">
              <div className="homeServicesCardHoverCont">
                  <div className="homeServicesCardIconCont">
                    <div className="homeServicesCardIcon"></div>
                    <div className="homeServicesCardIcon2"></div>
                    <div className="homeServicesCardIcon3"></div>
                  </div>
                  <div className="homeServicesCardHoverText">
                    <h3>Learn More</h3>
                  </div>
                </div>
                <h3>Routine Maintenance</h3>
                <p>We provide regular maintenance for clubhouses, offices, and pool areas to keep your community in top condition.</p>
              </div>
              <div className="homeServicesCardBG"></div>
            </Link>
            <Link href="/services" className="homeServicesCardCont">
              <div className="homeServicesCard">
              <div className="homeServicesCardHoverCont">
                  <div className="homeServicesCardIconCont">
                    <div className="homeServicesCardIcon"></div>
                    <div className="homeServicesCardIcon2"></div>
                    <div className="homeServicesCardIcon3"></div>
                  </div>
                  <div className="homeServicesCardHoverText">
                    <h3>Learn More</h3>
                  </div>
                </div>
                <h3>Something Else?</h3>
                <p>Don&apos;t see the service you need? Contact us with your custom request. We&apos;re flexible and experienced with special projects.</p>
              </div>
              <div className="homeServicesCardBG"></div>
            </Link>
          </div>
        </div>
      </div>
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
                <Image src="/sectionIcon.png" alt="homeExpertise" width={50} height={50} />
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
            <Image src="/expertiseImage2.png" alt="homeExpertiseImage" fill objectFit="cover" />
          </div>
        </div>
        <div className="homeExpertiseImagesCenter">
          <Image src="/expertiseImage1.png" alt="homeExpertiseImage" fill objectFit="cover" />
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
