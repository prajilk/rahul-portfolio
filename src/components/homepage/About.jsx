import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.jpg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
    const profile = useRef(null);
    const aboutSection = useRef(null);
    const heading = useRef(null);
    const body = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: aboutSection.current,
            start: "top 400px",
            animation: gsap
                .timeline()
                .to(
                    heading.current,
                    { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
                    0
                )
                .to(
                    body.current,
                    { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
                    0.2
                ),

            toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
    }, [aboutSection]);

    return (
        // Try using max width to contain the size of the container
        <section ref={aboutSection} aria-label="about me">
            <Heading title="about me" />
            <div className="flex flex-col gap-8 items-start mt-10 md:flex-row lg:gap-10">
                <div className="overflow-hidden top-28 rounded-md md:sticky md:w-1/2">
                    <img
                        ref={profile}
                        loading="lazy"
                        className="object-cover object-center w-full h-auto rounded-md aspect-square md:aspect-auto"
                        src={profileImg}
                        width="600"
                        height="800"
                        alt="portrait image of Huy standing in front of a tree and foliage"
                    />
                </div>
                <div className="top-20 sm:sticky md:top-28 md:w-1/2 lg:top-32">
                    <div className="space-y-4 w-full 2xl:space-y-10">
                        <h3
                            ref={heading}
                            className="font-semibold leading-tight opacity-0 translate-y-10 text-heading-3 2xl:text-7xl"
                        >
                            A brief intro, who am I?
                        </h3>
                        <p
                            ref={body}
                            className="opacity-0 translate-y-10  text-body-1 2xl:text-4xl"
                        >
                            I am an independent UI/UX designer and creator based
                            in Chennai, India.
                            <br></br>
                            <br></br>I specialize in crafting elevated,
                            intuitive, and minimalistic designs for startups and
                            small businesses to help them stand out in the
                            digital landscape with a powerful impact. 😎
                            <br></br>
                            <br></br>
                            As a UI/UX designer, I specialize in utilizing tools
                            such as Figma, Adobe XD, Adobe Photoshop, and
                            Illustration to transform ideas into visually
                            stunning and user-friendly designs. My expertise
                            lies in conceptualizing, prototyping, and refining
                            designs to deliver seamless experiences across
                            various platforms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
