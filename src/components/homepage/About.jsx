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
                            className="opacity-0 translate-y-10 text-body-1 2xl:text-4xl"
                        >
                            I&apos;m Rahul, a UI/UX Designer who enjoys turning
                            ideas into meaningful digital experiences. I
                            don&apos;t look at design as just visuals, I look at
                            it as a mix of psychology, clarity and intention.
                            Every interface should guide people naturally
                            without them even realizing it.
                            <br></br>
                            <br></br>Over the past few years, I&apos;ve worked
                            on websites, products and platforms across different
                            industries, helping businesses improve their digital
                            presence and create experiences people genuinely
                            value. I focus on designing interfaces that feel
                            clean, modern and effortless while solving real user
                            problems in a practical way. 😎
                            <br></br>
                            <br></br>
                            My approach is straightforward. Understand the
                            intention, simplify the complexity and design an
                            experience that feels natural. Every decision from a
                            layout to a micro interaction should help someone do
                            what they came to do without unnecessary friction.
                            <br></br>
                            <br></br>
                            Design, for me, is the idea of making digital
                            experiences clearer, more intuitive and
                            fundamentally more human. That purpose continues to
                            shape how I think and work every day.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
