import { Grid, Typography } from '@material-ui/core';
import React  from 'react';
import useStyles from './UserSideBar.style';

const UserSideBar = () => {
    const classes = useStyles();
    return (
        <>
            <Typography>
                    Sidebar
            </Typography>
        </>
    );
};

export default UserSideBar;