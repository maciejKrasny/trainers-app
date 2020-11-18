import { Typography } from "@material-ui/core";
import React from "react"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Typography>
                <Header />
                {children}
                <Footer />
            </Typography>
        </div>
    )
};

export default Layout;
