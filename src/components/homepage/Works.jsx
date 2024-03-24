import travelAgency from "/src/assets/images/travel-agency.png";
import sneaker from "/src/assets/images/sneaker-store.png";
import interior from "/src/assets/images/interior.png";
import furniture from "/src/assets/images/furniture-ui.png";
import healthcare from "/src/assets/images/health-care.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
    return (
        <section
            ref={forwardedRef}
            id="works"
            className="nav-change my-[10%] overflow-hidden"
        >
            <Heading title="Projects" />
            <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
                {/* Project #1 */}
                <div className=" col-span-1 md:col-span-12">
                    <Projects
                        link="https://www.behance.net/gallery/190463171/Travel-Agency-Website-Luhar-Landing-Page"
                        img={travelAgency}
                        alt="Travel agency website mockup"
                        name="Travel Agency Website"
                        type="UI/UX Design • Web Design"
                        year="2024"
                        tools="Adobe XD • Figma"
                    />
                </div>
                {/* Project #2 */}
                <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
                    <Projects
                        link="https://www.behance.net/gallery/188471007/Ecommerce-Shopping-App-Sneaker-Store-Case-Study"
                        img={sneaker}
                        alt="sneaker store app mockup"
                        name="sneaker store"
                        type="UI/UX Design • Wireframing"
                        year="2024"
                        tools="Figma • Photoshop"
                    />
                </div>
                <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
                    <Projects
                        link="https://www.behance.net/gallery/190361449/Landing-Page-Interior-Website-UIUX"
                        img={interior}
                        alt="Interior Site Website mockup"
                        name="Interior Site"
                        type="UI/UX Design • Web Design"
                        year="2024"
                        tools="Photoshop • Figma"
                    />
                </div>
                <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
                    <Projects
                        link="https://www.behance.net/gallery/190320269/Furniture-Website-UI"
                        img={furniture}
                        alt="Furniture website ui mockup"
                        name="Furniture website ui"
                        type="UI/UX Design • Web Design"
                        year="2024"
                        tools="Figma"
                    />
                </div>
                <div className="col-span-1 h-fit md:col-span-4">
                    <Projects
                        link="https://www.behance.net/gallery/190638607/Landing-Page-HealthCare-Website-Luhar-Care"
                        img={healthcare}
                        alt="Healthcare website mockup"
                        name="Healthcare LANDING PAGE"
                        type="UI/UX Design • Web Design"
                        year="2024"
                        tools="Figma"
                    />
                </div>
            </div>
        </section>
    );
}
