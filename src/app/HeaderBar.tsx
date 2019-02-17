import React, {ComponentType, FC} from "react"
import {AppBar, createStyles, Theme, Toolbar, Tooltip, withStyles, WithStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import classNames from "classnames";
import {findItems} from "./navigation";
import {RouteComponentProps, withRouter} from "react-router";
import {ExitToApp as SignOutIcon, Menu as MenuIcon} from "@material-ui/icons";

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    toolbar: {
        paddingLeft: 0,
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        marginLeft: 72,
        width: `calc(100% - 72px)`,
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
    titleRow: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
        alignItems: "baseline"
    },
    title: {
        display: 'inline-flex',
        marginRight: 8
    },
    subTitle: {
        flexGrow: 1,
        display: 'inline-flex',
    },
    admin: {
        display: 'inline-flex',
    }
});


interface ExternalProps {
    open: boolean,
    onToggleDrawer: () => void
}

type Props = ExternalProps & WithStyles<typeof styles> & RouteComponentProps

const _HeaderBar: FC<Props> = ({open, onToggleDrawer, classes, location}) => {
    const subTitle = findItems(location.pathname).map(navItem => navItem.title).join(" / ")
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
                    className={classNames(classes.menuButton)}
                >
                    <MenuIcon/>
                </IconButton>
                <div className={classes.titleRow}>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Offering Manager
                    </Typography>
                    <Typography
                        component="h1"
                        variant="subtitle1"
                        color="inherit"
                        noWrap
                        className={classes.subTitle}
                    >
                        {subTitle}
                    </Typography>
                    <Typography
                        component="h1"
                        variant="subtitle2"
                        color="inherit"
                        noWrap
                        className={classes.admin}
                    >
                        Admin Andersson
                    </Typography>
                </div>
                <IconButton color="inherit">
                    <Tooltip title="Sign out from Offering Manager">
                        <SignOutIcon/>
                    </Tooltip>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export const HeaderBar: ComponentType<ExternalProps> = withStyles(styles)(withRouter(_HeaderBar))