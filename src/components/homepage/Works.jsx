import cyberSecurity from "/src/assets/images/cybersecurity.png";
import spaceExplore from "/src/assets/images/space-explore.png";
import gym from "/src/assets/images/gym.png";
import sneaker from "/src/assets/images/sneaker-store.png";
import travelAgency from "/src/assets/images/travel-agency.png";

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
                        link="https://www.behance.net/gallery/195195853/Cybersecurity-Website-Landing-Page"
                        img={cyberSecurity}
                        alt="Cyber Security website mockup"
                        name="Cyber Security Website"
                        type="UI/UX Design • Web Design"
                        year="2024"
                        tools="Photoshop • Figma"
                    />
                </div>
                {/* Project #2 */}
                <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
                    <Projects
                        link="https://www.behance.net/gallery/195322237/Luhar-Space-Space-Exploration-Website"
                        img={spaceExplore}
                        alt="Space explore website mockup"
                        name="Space explore website"
                        type="UI/UX Design • Web Design"
                        year="2024"
                        tools="Figma • Photoshop"
                    />
                </div>
                <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
                    <Projects
                        link="https://www.behance.net/gallery/195247963/Fitness-Gym-Website-I-Landing-Page-Luhar-Fitness"
                        img={gym}
                        alt="Fitness Website mockup"
                        name="Fitness Site"
                        type="UI/UX Design • Web Design"
                        year="2024"
                        tools="Photoshop • Figma"
                    />
                </div>
                <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
                    <Projects
                        link="https://www.behance.net/gallery/188471007/Ecommerce-Shopping-App-Sneaker-Store-Case-Study"
                        img={sneaker}
                        alt="Sneaker Store"
                        name="Sneaker Store"
                        type="UI/UX Design • Wireframing"
                        year="2024"
                        tools="Figma • Photoshop"
                    />
                </div>
                <div className="col-span-1 h-fit md:col-span-4">
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
            </div>
            <div className="flex justify-center py-5">
                <a
                    href="https://www.behance.net/rahulrajeev22"
                    className="group relative w-fit cursor-pointer text-lg"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="text-primary-200">View More</span>
                    <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
            </div>
        </section>
    );
}
