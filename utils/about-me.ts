export type AboutMeData = {
    name: string;
    role: string;
    education: string[];
    skills: string[];
    experience: Array<{
        company: string;
        role: string;
        period: string;
        description: string;
    }>;
    projects: Array<{
        name: string;
        description: string;
        technologies: string[];
        url?: string;
        github?: string;
    }>;
    achievements: string[];
    interests: string[];
    contact: {
        x: string;
        email: string;
        linkedin: string;
        github: string;
        portfolio: string;
    };
};

export const aboutMe: AboutMeData = {
    name: "Phaneendra Babu Gunturu",
    role: "Deep Learning Researcher",
    education: [
        "Masters in Computer Science, Purdue University Indianapolis (formerly IUPUI), USA, 2025",
        "Bharath Institute of Higher Education & Research, India, 2023",
    ],
    skills: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Keras",
        "OpenCV",
        "Django",
        "Flask",
        "MongoDB",
        "SQL",
        "Git",
    ],
    experience: [
        {
            company: "Indiana University School of Medicine, USA",
            role: "Research Assistant",
            period: "July 2025 - Present",
            description:"Working as a Research assistant building Graph Neural networks for large-scale electronic health records (EHR) data. Developing and optimizing GNN architectures for improved accuracy and efficiency, leveraging PyTorch and TensorFlow. Collaborating with a multidisciplinary team to design and implement novel solutions for healthcare applications.",
        },
        {
            company: "Indiana University Indianapolis, USA",
            role: "Deep Learning Researcher",
            period: "November 2024 - May 2025",
            description:
                "Conducting NSF-funded research on large-scale medical datasets using deep learning architectures, including Transformers. Developing and optimizing models for improved accuracy and efficiency, leveraging PyTorch and TensorFlow. Collaborating with a multidisciplinary team to design and implement novel solutions for healthcare applications",
        },
        {
            company: "Indiana University Indianapolis, USA",
            role: "Mathematics Tutor",
            period: "January 2024 - January 2025",
            description:
                "Provided one-on-one and group tutoring sessions in calculus, linear algebra, statistics, and probability at the Mathematics DepartmentAssistance Center (MAC), improving student comprehension and academic performance.",
        },
        {
            company: "Verzeo, INDIA",
            role: "Machine Learning Intern",
            period: "June 2021 - Spetember 2021",
            description:
                "Led a 5-member team in developing a diabetes prediction system for women, achieving 95% accuracy through ensemble modeling of Random Forest, SVM, and Naive Bayes algorithms while reducing false negatives by 25%. Implemented robust cross-validation techniques and feature selection methods that reduced overfitting by 30%, while optimizing hyperparameters using GridSearchCV to improve model accuracy from 87% to 95%.",
        },
    ],
    projects: [
        {
            name: "Document Classification System",
            description:
                "Architected an enterprise-grade document classification system leveraging Vision Transformers (ViT) and PyTorch, achieving 93.81% accuracy on 400K+ documents with MLflow-based experiment tracking and automated model versioning. Implemented production-ready MLOps pipeline with automated data preprocessing, model checkpointing, and performance monitoring, processing 20K documents/epoch and achieving 98.57% training accuracy. Developed and optimized a multi-label classification model using cutting-edge ViT architecture achieving 95% reduction in document processing time, while maintaining high accuracy across 5 distinct document categories in mortgage domain",
            technologies: [
                "Transformers",
                "PyTorch",
                "MLflow",
                "MLOps",
                "ViT model",
            ],
            url: "https://github.com/PhaneeChowdary/Document-Classification-System",
            github: "https://github.com/PhaneeChowdary/Document-Classification-System",
        },
        {
            name: "Image Captioning System",
            description:
                "Developed and implemented an advanced Image Captioning system using TensorFlow and InceptionResNetV2, incorporating attention mechanisms and beam search to generate contextually accurate descriptions with a BLEU-4 score of 0.178. Designed and trained a neural network architecture combining CNN and RNN components, achieving 58.65% word-level prediction accuracy while implementing comprehensive evaluation metrics using NLTK. Created an efficient inference pipeline with beam search algorithm, optimizing caption generation process while maintaining code modularity and error handling for production-ready implementation",
            technologies: [
                "TensorFlow",
                "InceptionResNetV2",
                "CNN",
                "RNN",
                "NLTK",
                "Transformers",
            ],
            url: "https://github.com/PhaneeChowdary/Image-Captioning-Using-InceptionResNetV2",
            github: "https://github.com/PhaneeChowdary/Image-Captioning-Using-InceptionResNetV2",
        },
        {
            name: "Pubg Player analysis & Rank Prediction",
            description:
                "Applied advanced data cleaning techniques and optimized dataset memory by 65.5% (983.90 MB to 339.28 MB) while maintaining data integrity and eliminating fraudulent gameplay data. Engineered 15+ game-specific features including normalized kill ratios, movement patterns, and team dynamics to capture comprehensive player performance metrics. Implemented Random Forest Regressor with feature importance analysis, achieving 0.0488 MAE for player ranking prediction while identifying key performance indicators",
            technologies: [
                "Python",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "Ensemble Learning",
            ],
            url: "https://github.com/PhaneeChowdary/Pubg",
            github: "https://github.com/PhaneeChowdary/Pubg",
        },
        {
            name: "Restaurant Recommendation System",
            description:
                "A full-stack web application for restaurant recommendations with filtering and search capabilities. Features: Restaurant search by city, Price range filtering, Advanced filters for categories and amenities, Restaurant details including ratings and reviews, CRUD operations for restaurants",
            technologies: ["Python", "Flask", "MongoDB", "Node.js"],
            url: "https://github.com/PhaneeChowdary/RestaurantsRecommendation",
            github: "https://github.com/PhaneeChowdary/RestaurantsRecommendation",
        },
        {
            name: "Task Management System",
            description:
                "A Flask-based web app for task organization with team collaboration features, responsive UI, and real-time Firebase integration.",
            technologies: ["Python", "Flask", "MongoDB", "Node.js"],
            url: "https://phaneendrababugunturu.pythonanywhere.com",
            github: "https://github.com/PhaneeChowdary/Task-Manager",
        },
    ],
    achievements: [
        "Attained a global rank of 1770 in TCS CodeVita season 10, TCS.",
        "Certified as an outstanding intern in Machine Learning, Verzeo.",
        "Secured a rank of 4696 in Google Kickstart Round G 2022, Google.",
    ],
    interests: [
        "Cricket",
        "Chess",
        "Reading",
        "Traveling",
        "Mentoring",
        "Coding",
        "Research",
        "Blog Writing",
        "Space & Galaxies",
        "Spirituality",
    ],
    contact: {
        x: "https://x.com/phaneestwt",
        email: "phaneegunturu@gmail.com",
        linkedin: "https://www.linkedin.com/in/gunturuphanee/",
        github: "https://github.com/PhaneeChowdary",
        portfolio: "https://phaneechowdary.github.io",
    },
};
