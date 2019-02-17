import React, {ComponentType, FC} from "react";
import {Button, createStyles, Theme, Typography, withStyles, WithStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const styles = (theme: Theme) => createStyles({
    layout: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        marginBottom: 16,
        fontSize: 24,
        textTransform: "uppercase",
        fontWeight: 300,
        color: 'rgba(0,0,0,0.87)'
    }
})

const BackHomeLink = (props:any) => <Link to="/" {...props} />

const _NotFoundPage: FC<WithStyles<typeof styles>> = ({classes}) => {
    return (
        <div className={classes.layout}>
            <Typography variant="h5" className={classes.title}>Sorry Page not found</Typography>
            <Button variant="contained" component={BackHomeLink}>
                Go back to start page
            </Button>
        </div>
    )
}


export const NotFoundPage: ComponentType = withStyles(styles)(_NotFoundPage)