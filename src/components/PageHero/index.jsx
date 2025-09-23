import styles from "./styles.module.css";
import Image from "next/image";

export default function PageHero(props) {
    const { page } = props;
    let title = "";
    let description = "";
    let image = "";
    if (page === "services") {
        // services
        title = "Superior Services"
        description = "Rizzazzle Repairs provides professional installation and repair services that ensure seamless setup, reliable performance, and customized solutions for homes and businesses."
        image = "/servicesHero.jpg"
    } else if (page === "about") {
        // about
        title = "Empower Your AV Needs"
        description = "Always Ready to Assist"
        image = "/aboutHero.png"
    } else if (page === "projects") {
        // projects
        title = "Our Work"
        description = "A showcase of our work, highlighting the quality, detail, and reliability we bring to every project."
        image = "/projectsHero.png"
    } else if (page === "security") {
        // security
        title = "Protect What Matters Most"
        description = "We provide professional security solutions designed to protect your property and give you peace of mind."
        image = "/securityHero.png"
    } else if (page === "locations") {
        // locations
        title = "Our Service Area"
        description = "Professional services for Denver and beyond"
        image = "/locationsHero.png"
    } else if (page === "contact") {
        // contact
        title = "Get in Touch"
        description = "For urgent issues, price quotes, or any other inquiries, our team is ready to assist you."
        image = "/contactHero.png"
    }
    return (
        <div className={styles.sectionHeroCont}>
            <div className={styles.sectionHeroGrid}>
                <div className={styles.sectionHeroGridLeft}>
                    <div className={styles.sectionHeroGridLeftText}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={styles.sectionHeroGridRight}>
                    <Image src={image} alt={title} fill objectFit="cover" />
                </div>
            </div>
        </div>
    )
}