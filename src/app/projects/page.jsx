import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import styles from "./styles.module.css";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import ClientCarousel from "@/components/ClientCarousel";
import ContactSection from "@/components/ContactSection";
export default function Projects() {
    return (
        <div className={styles.projectsCont}>
            <Nav />
            <PageHero page="projects" />
            <div className={styles.projectsItem}>
                <hr className={styles.projectsItemSeparator} />
                <div className={styles.projectsItemTextCont}>
                    <div className={styles.projectsItemContLeft}>
                        <div className={styles.projectsItemTitle}>
                            <h2>Carnegie at Washingtonian</h2>
                            <p>TV Installation</p>
                        </div>
                        <div className={styles.projectsItemTitleArrow}>
                            <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.projectsItemText}>
                        <p>Commercial installation of 6x 55″ touch screens in custom kiosks, 1x 55″ touch screen on standard wall, and 1x 65″ touch screen in custom table</p>
                    </div>
                </div>
                <div className={styles.projectsItemImageCont}>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/carnegie/1.jpg" alt="carnegie1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/carnegie/2.jpg" alt="carnegie2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/carnegie/3.jpg" alt="carnegie3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/carnegie/4.jpg" alt="carnegie4" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                    </div>
                </div>
                <div className={styles.projectsItemImageContMobile}>
                    <div className={styles.projectsItemGrid}>                   
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/carnegie/1.jpg" alt="carnegie1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/carnegie/2.jpg" alt="carnegie2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/carnegie/3.jpg" alt="carnegie3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/carnegie/4.jpg" alt="carnegie4" fill objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectsItem}>
                <hr className={styles.projectsItemSeparator} />
                <div className={styles.projectsItemTextCont}>
                    <div className={styles.projectsItemContLeft}>
                        <div className={styles.projectsItemTitle}>
                            <h2>Touch Screens</h2>
                            <p>TV Installation</p>
                        </div>
                        <div className={styles.projectsItemTitleArrow}>
                            <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.projectsItemText}>
                        <p>A small sampling of the dozens of large format touch screen installations we&apos;ve accomplished. Each screen generally weighing 80lbs+ installed seamlessly to finish the look of any space</p>
                    </div>
                </div>
                <div className={styles.projectsItemImageCont}>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/1.jpg" alt="engrain1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/2.jpg" alt="engrain2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/3.jpg" alt="engrain3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/4.jpg" alt="engrain4" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/5.jpg" alt="engrain5" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/6.jpg" alt="engrain6" fill objectFit="cover" />
                        </div>
                    </div>
                </div>
                <div className={styles.projectsItemImageContMobile}>
                    <div className={styles.projectsItemGrid}>
                        
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/1.jpg" alt="engrain1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/2.jpg" alt="engrain2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/3.jpg" alt="engrain3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/4.jpg" alt="engrain4" fill objectFit="cover" />
                        </div>
                        
                    </div>
                    <div className={styles.projectsItemGrid}>
                        
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/5.jpg" alt="engrain5" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/engrain/6.jpg" alt="engrain6" fill objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectsItem}>
                <hr className={styles.projectsItemSeparator} />
                <div className={styles.projectsItemTextCont}>
                    <div className={styles.projectsItemContLeft}>
                        <div className={styles.projectsItemTitle}>
                            <h2>McDonalds at Denver Airport</h2>
                            <p>TV Installation</p>
                        </div>
                        <div className={styles.projectsItemTitleArrow}>
                            <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.projectsItemText}>
                        <p>Commercial installation of 5x 49″ menu display boards at McDonalds in Concourse A of Denver International Airport</p>
                    </div>
                </div>
                <div className={styles.projectsItemImageCont}>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/mcdonalds/1.jpg" alt="mcdonalds1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/mcdonalds/2.jpg" alt="mcdonalds2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/mcdonalds/3.jpg" alt="mcdonalds3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>

                        </div>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                    </div>
                </div>
                <div className={styles.projectsItemImageContMobile}>
                    <div className={styles.projectsItemGrid}>
                        
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/mcdonalds/1.jpg" alt="mcdonalds1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/mcdonalds/2.jpg" alt="mcdonalds2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/mcdonalds/3.jpg" alt="mcdonalds3" fill objectFit="cover" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={styles.projectsItem}>
                <hr className={styles.projectsItemSeparator} />
                <div className={styles.projectsItemTextCont}>
                    <div className={styles.projectsItemContLeft}>
                        <div className={styles.projectsItemTitle}>
                            <h2>Chimney Hill HOA</h2>
                            <p>Trash Corral Cleanup</p>
                        </div>
                        <div className={styles.projectsItemTitleArrow}>
                            <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.projectsItemText}>
                        <p>Regular cleanup of 8x community trash corrals and surrounding area. Maintaining the esteemed look of the community on a regular basis</p>
                    </div>
                </div>
                <div className={styles.projectsItemImageCont}>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/1.jpg" alt="chimney1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/2.jpg" alt="chimney2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/3.jpg" alt="chimney3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/4.jpg" alt="chimney4" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/5.jpg" alt="chimney5" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/6.jpg" alt="chimney6" fill objectFit="cover" />
                        </div>
                    </div>
                </div>
                <div className={styles.projectsItemImageContMobile}>
                    <div className={styles.projectsItemGrid}>
                        
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/1.jpg" alt="chimney1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/2.jpg" alt="chimney2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/3.jpg" alt="chimney3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/4.jpg" alt="chimney4" fill objectFit="cover" />
                        </div>
                        
                    </div>
                    <div className={styles.projectsItemGrid}>
                        
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/5.jpg" alt="chimney5" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/chimney/6.jpg" alt="chimney6" fill objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectsItem}>
                <hr className={styles.projectsItemSeparator} />
                <div className={styles.projectsItemTextCont}>
                    <div className={styles.projectsItemContLeft}>
                        <div className={styles.projectsItemTitle}>
                            <h2>Umbrella Ridge HOA</h2>
                            <p>Clubhouse Cleaning</p>
                        </div>
                        <div className={styles.projectsItemTitleArrow}>
                            <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.projectsItemText}>
                        <p>Regular cleanup of clubhouse and surrounding pool area. Keeping the community spaces sparkling</p>
                    </div>
                </div>
                <div className={styles.projectsItemImageCont}>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/umbrella/1.jpg" alt="umbrella1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/umbrella/2.jpg" alt="umbrella2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/umbrella/3.jpg" alt="umbrella3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/umbrella/4.jpg" alt="umbrella4" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                    </div>

                </div>
                <div className={styles.projectsItemImageContMobile}>
                    <div className={styles.projectsItemGrid}>
                        
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/umbrella/1.jpg" alt="umbrella1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/umbrella/2.jpg" alt="umbrella2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/umbrella/3.jpg" alt="umbrella3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/umbrella/4.jpg" alt="umbrella4" fill objectFit="cover" />
                        </div>
                        
                    </div>

                </div>
            </div>

            <div className={styles.projectsItem}>
                <hr className={styles.projectsItemSeparator} />
                <div className={styles.projectsItemTextCont}>
                    <div className={styles.projectsItemContLeft}>
                        <div className={styles.projectsItemTitle}>
                            <h2>Digital Piano Keyboards</h2>
                            <p>Repairs</p>
                        </div>
                        <div className={styles.projectsItemTitleArrow}>
                            <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.projectsItemText}>
                        <p>A small sampling of the dozens of digital piano keyboards we&apos;ve fixed. Everything from dead notes, to sticky keys, to malfunctioning soundboards</p>
                    </div>
                </div>
                <div className={styles.projectsItemImageCont}>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/1.jpg" alt="piano1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/2.jpg" alt="piano2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/3.jpg" alt="piano3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/4.jpg" alt="piano4" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/5.jpg" alt="piano5" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/6.jpg" alt="piano6" fill objectFit="cover" />
                        </div>
                    </div>
                </div>
                <div className={styles.projectsItemImageContMobile}>
                    <div className={styles.projectsItemGrid}>
                       
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/1.jpg" alt="piano1" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/2.jpg" alt="piano2" fill objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/3.jpg" alt="piano3" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/4.jpg" alt="piano4" fill objectFit="cover" />
                        </div>
                        
                    </div>
                    <div className={styles.projectsItemGrid}>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/5.jpg" alt="piano5" fill objectFit="cover" />
                        </div>
                        <div className={styles.projectsItemGridItem}>
                            <Image src="/projects/piano/6.jpg" alt="piano6" fill objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectsItemSeparator} />
            <ClientCarousel />
            <Testimonials />
            <ContactSection />
            <Footer />
        </div>
    )
}