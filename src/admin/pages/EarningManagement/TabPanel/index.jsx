import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    panelWrapper: {
        backgroundColor: "#FFF",
        padding: "2rem"
    }
}));

const TabPanel = ({children, index, value, ...other}) => {
    const classes = useStyles();

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`data-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box  className={classes.panelWrapper}>{children}</Box>
            )}
            </div>
    )
}

export default TabPanel
