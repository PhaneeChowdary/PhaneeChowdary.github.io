import React from "react";
import Image from "next/image";

const Experience = () => {
    const experiences = [
        {
            title: "Research Assistant",
            company: "Indiana University School of Medicine",
            period: "June 2025",
            present: true,
            logo: "/company-logos/IU.svg.png",
        },
        {
            title: "Deep Learning Researcher",
            company: "UbiEi Lab, Indiana University",
            period: "Aug 2024 - May 2025",
            logo: "/company-logos/IU.svg.png",
        },
        {
            title: "Mathematics tutor",
            company: "Indiana University",
            period: "Jan 2024 - Jan 2025",
            logo: "/company-logos/IU.svg.png",
        },
        {
            title: "Machine Learning Intern",
            company: "Verzeo",
            period: "June 2021 - Sep 2022",
            logo: "/company-logos/verzeo.png",
        },
    ];

    return (
        <section id="experience" className="my-10">
            <h2 className="text-xl mb-4 font-semibold">Experience</h2>
            <div className="pl-5 relative border-gray-500">
                <div className="border-l-2 absolute h-full"></div>
                {experiences.map((experience, index) => (
                    <div key={index} className="ml-6 mb-8 relative">
                        <div className="absolute -left-11 top-2 bottom-2 -translate-y-3/2 w-10 h-10 rounded-full overflow-hidden border border-gray-500 flex items-center justify-center">
                            <Image
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-xl">
                                {experience.title}{" "}
                                {experience.present && (
                                    <span className="text-gray-500 text-xs uppercase px-1 rounded-full border border-gray-600">
                                        Present
                                    </span>
                                )}
                            </h3>
                            <p className="text-gray-600">
                                {experience.company} ({experience.period})
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
