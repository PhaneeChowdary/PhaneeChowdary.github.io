import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Resume from "../components/Resume";

const ResumePage = () => {
    return (
        <Layout>
            <Header />
            <Resume />
            <Footer />
        </Layout>
    );
};

export default ResumePage;
