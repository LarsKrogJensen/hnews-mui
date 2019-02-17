import React, {ComponentType} from "react"
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {WithStyles} from "@material-ui/core/es";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";

const styles = (theme: Theme) => createStyles({
    root: {
        "&$selected": {
            '& *': {color: '#fff'},
        },
        "&:hover": {
            '& *': {color: '#fff'},
        },
        "&:focus": {
            '& *': {color: '#fff'},
        }
    },
    selected: {}
});


const _ListMenuItem: ComponentType<ListItemProps & WithStyles<typeof styles>> = ({children, ...props}) => {
    return (
        <ListItem button {...props}>
            {children}
        </ListItem>
    )
}

export const ListMenuItem: ComponentType<ListItemProps> = withStyles(styles)(_ListMenuItem);