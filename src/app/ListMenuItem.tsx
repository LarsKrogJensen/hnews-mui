import React, {ComponentType} from "react"
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {WithStyles} from "@material-ui/core/es";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";

const styles = (theme: Theme) => createStyles({
    root: {
        "&$selected": {
            // backgroundColor: theme.palette.primary.main,
            '& *': {color: '#fff'},
        },
        "&:hover": {
            // backgroundColor: theme.palette.primary.dark,
            '& *': {color: '#fff'},
        },
        "&:focus": {
            // backgroundColor: '#0f0',
            '& *': {color: '#fff'},
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

export const ListMenuItem: ComponentType<ListItemProps> = withStyles(styles)(_MenuItem);