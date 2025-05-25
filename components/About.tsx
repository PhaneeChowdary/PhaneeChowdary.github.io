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
                I'm a passionate{" "}
                <strong style={{ color: "black" }}>Computer Science</strong>{" "}
                graduate student at{" "}
                <strong style={{ color: "black" }}>
                    <a href="https://www.purdue.edu">Purdue University</a>
                </strong>{" "}
                with a strong focus on Artificial Intelligence and Machine
                Learning. I'm actively seeking opportunities in internships,
                full-time roles, and research that allow me to innovate at the
                intersection of deep learning, data science, and real-world
                impact. I enjoy the challenge of turning complex problems into
                robust, data-driven solutions. Let's connect I'm always excited
                to explore opportunities that combine AI with purpose.
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
