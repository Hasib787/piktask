import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Heading.styles';

const Heading = ({tag, children}) => {
    const classes = useStyles();
    
    return (
        <Typography variant={tag} className={classes.heading}>
            {children}
        </Typography>
    )
}

export default Heading;
