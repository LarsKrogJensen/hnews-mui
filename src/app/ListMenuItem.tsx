import {createStyles, Theme, withStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";

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


// const _ListMenuItem: ComponentType<ListItemProps & WithStyles<typeof styles>> = ({children, ...props}) => {
//     return (
//         <ListItem component="li" {...props}>
//             {children}
//         </ListItem>
//     )
// }

export const ListMenuItem = withStyles(styles)(ListItem);