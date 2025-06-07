import React from "react";
import { FiDownload, FiGithub } from "react-icons/fi";
import { aboutMe } from "../utils/about-me";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
    const handleDownload = () => {
        // Create a temporary link element
        const link = document.createElement("a");
        link.href = "/PhaneendraBabu.pdf";
        link.download = "PhaneendraBabu_Resume.pdf"; // This will force download instead of opening in new tab
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="my-10">
            <Head>
                <title>Resume</title>
            </Head>
            <div className="max-w-4xl mx-auto">
                {/* Education */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold mb-6">Education</h2>
                    <div className="space-y-6">
                        {aboutMe.education.map((edu, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-6"
                            >
                                <p className="text-lg">{edu}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold mb-6">Experience</h2>
                    <div className="space-y-8">
                        {aboutMe.experience.map((exp, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-6"
                            >
                                <h3 className="text-xl font-semibold">
                                    {exp.role}
                                </h3>
                                <p className="text-gray-600">{exp.company}</p>
                                <p className="text-sm text-gray-500 mb-4">
                                    {exp.period}
                                </p>
                                <p className="text-gray-700">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold mb-6">Projects</h2>
                    <div className="space-y-8">
                        {aboutMe.projects.map((project, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-6"
                            >
                                <h3 className="text-xl font-semibold">
                                    {project.name}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mx-2 gap-2"
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    )}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="flex justify-center items-center mb-8">
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        <FiDownload />
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Resume;
