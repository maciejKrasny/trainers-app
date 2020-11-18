import { Box, Typography } from '@material-ui/core';
import React from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index, value, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
};

export default TabPanel;
