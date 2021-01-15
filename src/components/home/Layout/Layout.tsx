import { Typography } from "@material-ui/core";
import React from "react"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
    isSticky?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isSticky }) => {
    return (
        <div >
            <Typography style={{minHeight: '100vh', position: 'relative'}}>
                <Header isSticky={isSticky} />
                {children}
                <Footer />
            </Typography>
        </div>
    )
};

export default Layout;
