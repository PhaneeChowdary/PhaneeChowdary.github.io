import React from "react";
import Head from "next/head";

const Skills = () => {
    const skills = [
        {
            category: "Programming Languages",
            items: ["Python", "R", "C++", "Java", "SQL", "JavaScript"],
        },
        {
            category: "Data Preprocessing & Visualization",
            items: [
                "Pandas",
                "NumPy",
                "Data Augmentation",
                "Data Preprocessing",
                "Seaborn",
                "Plotly",
                "Matplotlib",
            ],
        },
        {
            category: "Machine Learning & Deep Learning",
            items: [
                "SciKit-Learn",
                "TensorFlow",
                "Keras",
                "PyTorch",
                "Transformers",
                "Computer Vision",
                "MLOps",
                "MLflow",
            ],
        },
        {
            category: "AI Ecosystem & Tools",
            items: [
                "OpenAI",
                "Groq",
                "Hugging Face",
                "LangChain",
                "RAG",
                "Fine Tuning",
                "LLMs",
                "Ensemble Learning",
            ],
        },
        {
            category: "Web Development",
            items: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Restful APIs",
                "Django",
                "Flask",
                "Bootstrap",
                "Firebase",
                "Node.js",
            ],
        },
        {
            category: "Databases & Cloud",
            items: [
                "MongoDB",
                "MySQL",
                "PostgreSQL",
                "AWS",
                "GCP",
                "Azure",
                "Redis",
            ],
        },
        {
            category: "Other Tools",
            items: [
                "Git",
                "GitHub",
                "Docker",
                "Linux",
                "MacOS",
                "Windows",
                "VSCode",
                "Jupyter",
            ],
        },
    ];

    return (
        <section id="skills" className="my-10">
            <Head>
                <title>Skills</title>
            </Head>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {skills.map((skillSet, index) => (
                    <div
                        key={index}
                        className="border p-4 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 col-auto"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            {skillSet.category}
                        </h3>
                        <div className="flex flex-wrap space-x-2">
                            {skillSet.items.map((item, i) => (
                                <span
                                    key={i}
                                    className="inline-block bg-gray-200 px-2 py-1 rounded-lg mb-2"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
