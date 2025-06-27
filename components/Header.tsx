import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faSquareXTwitter,
    faHashnode,
} from "@fortawesome/free-brands-svg-icons";
import { faMeteor, faStar } from "@fortawesome/free-solid-svg-icons";
import { useStarEffect } from "../context/StarEffectContext";

const Header = () => {
    const router = useRouter();
    const { pathname } = router;
    const { isStarEffectEnabled, toggleStarEffect } = useStarEffect();

    // Helper function to handle basePath for GitHub Pages
    const getImagePath = (path: string) => {
        return path;
    };

    return (
        <header className="flex flex-col">
            <Link href="/">
                <img
                    src={getImagePath("/Phanee.jpg")}
                    alt="Phaneendra Babu Gunturu"
                    className="w-30 h-40 rounded-full"
                />
            </Link>
            <h1 className="text-2xl mt-2">Phaneendra Babu Gunturu</h1>
            <p className="text-gray-700">AI/ML Research Assistant</p>
            <div className="flex space-x-5 mt-4 text-2xl">
                <a
                    href="https://github.com/PhaneeChowdary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/gunturuphanee/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://twitter.com/phaneestwt"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                </a>
                <a
                    href="https://phanee.hashnode.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faHashnode} />
                </a>
                <button
                    onClick={toggleStarEffect}
                    className={`transition-colors duration-200 ${
                        isStarEffectEnabled ? "text-gray-500" : "text-dark"
                    }`}
                    title={
                        isStarEffectEnabled
                            ? "Disable star effect"
                            : "Enable star effect"
                    }
                >
                    <FontAwesomeIcon icon={faMeteor} />
                </button>
            </div>
            <hr className="my-6" />
            <nav className="flex flex-wrap gap-2">
                <Link href="/">
                    <button
                        className={`py-1 px-2 rounded-lg ${
                            pathname === "/"
                                ? "bg-black text-white"
                                : "text-gray-700"
                        }`}
                    >
                        About
                    </button>
                </Link>
                <Link href="/projects">
                    <button
                        className={`py-1 px-2 rounded-lg ${
                            pathname === "/projects"
                                ? "bg-black text-white"
                                : "text-gray-700"
                        }`}
                    >
                        Projects
                    </button>
                </Link>
                <Link href="/skills">
                    <button
                        className={`py-1 px-2 rounded-lg ${
                            pathname === "/skills"
                                ? "bg-black text-white"
                                : "text-gray-700"
                        }`}
                    >
                        Skills
                    </button>
                </Link>
                <Link href="/blogs">
                    <button
                        className={`py-1 px-2 rounded-lg ${
                            pathname === "/blogs"
                                ? "bg-black text-white"
                                : "text-gray-700"
                        }`}
                    >
                        Blogs
                    </button>
                </Link>
                <Link href="/resume">
                    <button
                        className={`py-1 px-2 rounded-lg ${
                            pathname === "/resume"
                                ? "bg-black text-white"
                                : "text-gray-700"
                        }`}
                    >
                        Resume
                    </button>
                </Link>
                <Link href="/contact">
                    <button
                        className={`py-1 px-2 rounded-lg ${
                            pathname === "/contact"
                                ? "bg-black text-white"
                                : "text-gray-700"
                        }`}
                    >
                        Contact
                    </button>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
