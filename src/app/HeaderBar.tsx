import React, {ComponentType, FC} from "react"
import {AppBar, createStyles, Theme, Toolbar, withStyles, WithStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

import classNames from "classnames";

const drawerWidth = 240;
const miniDrawerWidth = 72;


const styles = (theme: Theme) => createStyles({
    toolbar: {
        paddingLeft: 0,
        paddingRight: 24, // keep right padding when drawer closed
        height: 60,
        minHeight: 60
    },
    appBar: {
        marginLeft: miniDrawerWidth,
        width: `calc(100% - ${miniDrawerWidth}px)`,
        backgroundColor: "#fff",
        color: "#555",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
});


interface ExternalProps {
    open: boolean,
    onToggleDrawer: () => void
}

type Props = ExternalProps & WithStyles<typeof styles>

const _HeaderBar: FC<Props> = ({open, onToggleDrawer, classes}) => {
    return (
        <AppBar
            position="absolute"
            className={classNames(classes.appBar, open && classes.appBarShift)}
        >
            <Toolbar disableGutters={!open} className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={onToggleDrawer}
                    className={classNames(
                        classes.menuButton,
                        // this.state.open && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    Offering Manager
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export const HeaderBar: ComponentType<ExternalProps> = withStyles(styles)(_HeaderBar)