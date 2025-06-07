import React from "react";
import Experience from "./Experience";
import BlogPreview from "./BlogPreview";
import Achievements from "./Achievements";
import Head from "next/head";

const About = () => {
    return (
        <section id="about" className="my-10 relative">
            <Head>
                <title>Phaneendra Babu Gunturu</title>
            </Head>
            <p className="text-lg text-gray-600 relative z-10">
                I'm a passionate <strong>Computer Science</strong> graduate{" "}
                student at{" "}
                <strong>
                    <a href="https://www.purdue.edu">Purdue University</a>
                </strong>{" "}
                with a strong focus on Artificial Intelligence and Machine
                Learning. I enjoy the challenge of turning complex problems into
                robust, data-driven solutions. I'm always excited to explore
                opportunities that combine AI with purpose.
            </p>
            <div className="relative z-10">
                <Experience />
                <BlogPreview />
                <Achievements />
            </div>
        </section>
    );
};

export default About;
