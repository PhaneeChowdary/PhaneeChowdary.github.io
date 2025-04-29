// utils/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

// Helper function to handle basePath for GitHub Pages
const getImagePath = (path: string) => {
    return path;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Image Captioning",
        description:
            "Deep learning model that generates descriptions for images using InceptionResNetV2 encoder and attention-based GRU decoder.",
        image: getImagePath("/Dog.webp"),
        link: "https://github.com/PhaneeChowdary/ImageCaptioningUsingInceptionResNetV2",
    },
    {
        id: 2,
        title: "Restaurant Recommendation System",
        description:
            "A full-stack web application for restaurant recommendations with filtering and search capabilities.",
        image: getImagePath("/Restaurant.jpg"),
        link: "https://github.com/PhaneeChowdary/RestaurantsRecommendation",
    },
    {
        id: 3,
        title: "Pubg Player Analysis",
        description:
            "Pubg player analysis and position prediction using Machine Learning",
        image: getImagePath("/Pubg.jpg"),
        link: "https://github.com/PhaneeChowdary/Pubg",
    },
    {
        id: 4,
        title: "Diabetes Prediction",
        description:
            "Machine Learning model that predicts the onset of diabetes using the set of parameters such as Insulin, BMI, Age etc.",
        image: getImagePath("/diabetes.webp"),
        link: "https://github.com/PhaneeChowdary/Diabetes-Prediction",
    },
    {
        id: 5,
        title: "Smart Job Application Assistant",
        description:
            "An intelligent job application system that scrapes job postings and helps create tailored resumes based on your project portfolio and job requirements.",
        image: getImagePath("/Job.png"),
        link: "https://github.com/PhaneeChowdary/SmartJobApplicationAssistant",
    },
    {
        id: 6,
        title: "Task Management System",
        description:
            "A Flask-based web app for task organization with team collaboration features, responsive UI, and real-time Firebase integration.",
        image: getImagePath("/TaskManager.jpg"),
        link: "https://phaneendrababugunturu.pythonanywhere.com",
    },
];
