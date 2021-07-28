import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // height: "6.5rem"
    },
    inputField: {
        backgroundColor: theme.palette.common.white,
        border: "none",
        padding: ".5rem 3rem",
        fontSize: 18,
        height: "6.5rem",
        borderTopLeftRadius: ".2rem",
        borderBottomLeftRadius: ".2rem",
        [theme.breakpoints.down('sm')]: {
            height: "4.5rem"
        }
    },
    searchIconWrapper: {
        backgroundColor: theme.palette.primary.light,
        width: 122,
        height: "6.5rem",
        cursor: "pointer",
        textAlign: "center",
        borderTopRightRadius: ".2rem",
        borderBottomRightRadius: ".2rem",
        [theme.breakpoints.down('sm')]: {
            height: "4.5rem"
        },

        [theme.breakpoints.down(576)]: {
            height: "4.6rem",
            width: 76,
          },
    },
    searchIcon: {
        color: theme.palette.common.white,
        width: "2.2rem",
        height: "100%",
    },
    selectContainer: {
        backgroundColor: theme.palette.common.white,
        height: "6.5rem",
        [theme.breakpoints.down('sm')]: {
            height: "4.5rem"
        },
        "& > select": {
            width: 200,
            paddingLeft: "1rem",
            borderLeft: "1px solid",
            fontSize: "1.8rem",
            height: "3.2rem",
            "&:focus": {
                backgroundColor: "transparent"
            }
        },
        "& .MuiNativeSelect-icon": {
            right: 22
        }
    }

}));

export default useStyles;