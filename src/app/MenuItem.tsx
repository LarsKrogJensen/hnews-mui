import React, {ComponentType, FC} from "react"
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {WithStyles} from "@material-ui/core/es";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";

const styles = (theme: Theme) => createStyles({
    root: {
        "&$selected": {
            backgroundColor: theme.palette.secondary.main
        }
    },
    selected: {}
});


const _MenuItem: ComponentType<ListItemProps & WithStyles<typeof styles>> = ({children, classes, ...other}) => {
    return (
        <ListItem button classes={classes} {...other}>
            {children}
        </ListItem>
    )
}

export const MenuItem: ComponentType<ListItemProps> = withStyles(styles)(_MenuItem);