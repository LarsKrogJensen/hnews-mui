import React, {Component, ComponentType, ReactElement} from "react"
import {RouteComponentProps, withRouter} from "react-router";
import {createStyles, MuiThemeProvider, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import classNames from "classnames";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {findItems, NavItem, navItems} from "./navigation"
import {Collapse, ListItemIcon, ListItemText} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {ListMenuItem} from "./ListMenuItem";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import logo from "./logo.svg"
import logo_small from "./logo_small.svg"

const drawerWidth = 240;

const theme: any = (theme: Theme) => createMuiTheme({
    palette: {
        primary: theme.palette.primary,
        secondary: theme.palette.secondary,
        type: 'dark',
    },
    typography: {
        fontSize: 12,
        fontFamily: "Roboto",
        useNextVariants: true
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: '#343A40',
                '& *': {color: '#a1a1a1'},
            }
        },
        MuiSvgIcon: {
            root: {
                fontSize: 18
            }
        },
        MuiListItemText: {
            primary: {
                color: '#a1a1a1',
            }
        }
    }
});

const styles = (theme: Theme) => createStyles(
    {
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            borderRight: 0,
            width: drawerWidth, // How to theme this bastard
            height: "100%",
            overflowY: "hidden",
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing.unit * 9
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 8px',
            background: theme.palette.primary.dark,
            height: theme.mixins.toolbar.maxHeight,
            minHeight: theme.mixins.toolbar.minHeight,
            borderRadius: 0
        },
        nestedItem: {
            paddingLeft: theme.spacing.unit * 4,
            background: '#2F3439'
        },
        expanded: {
            background: '#2F3439',
            '& *': {color: '#fff'},
        },
        secondaryIcon: {
            marginRight: 0
        },
        iconBig: {
            '& *': {
                fontSize: 24
            },
        },
        iconSmall: {
            '& *': {
                fontSize: 18
            },
        },
    }
);

interface ExternalProps {
    open: boolean
}

interface State {
    currentPath: string,
    expandedPath: string,
}

type Props = ExternalProps & WithStyles<typeof styles> & RouteComponentProps


class _Navigator extends Component<Props, State> {
    state = {
        currentPath: this.props.location.pathname,
        expandedPath: "",
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
        if (prevState.currentPath === nextProps.location.pathname) {
            return prevState
        }

        let items = findItems(nextProps.location.pathname);

        const expandedPath = (items.length > 0 && items[0].type === "group") ? items[0].path : prevState.expandedPath

        return {
            currentPath: nextProps.location.pathname,
            expandedPath
        }
    }

    handleToggleSection = (expandedPath: string) => this.setState({expandedPath})

    render() {
        const {classes, open} = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Drawer
                    variant="permanent"
                    classes={{paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),}}
                    open={open}>
                    <div className={classes.logo}>
                        {!open && <img height={40} src={logo_small} alt="logo"/>}
                        {open && <img width={120} src={logo} alt="logo"/>}
                    </div>
                    <PerfectScrollbar>
                        <List>
                            {Array.from(this.buildNavigationLinks())}
                        </List>
                    </PerfectScrollbar>
                </Drawer>
            </MuiThemeProvider>
        )
    }

    * buildNavigationLinks(items: NavItem[] = navItems,
                           parentItem: NavItem | undefined = undefined): IterableIterator<ReactElement<any>> {
        const {classes} = this.props

        for (const item of items) {
            const path = (parentItem ? parentItem.path : "") + item.path
            if (item.type === "group") {
                const isExpanded = this.state.expandedPath === path;
                yield (
                    <ListMenuItem key={path}
                                  button
                                  onClick={() => this.handleToggleSection(isExpanded ? "" : path)}
                                  className={isExpanded ? classes.expanded : ""}
                                  selected={false}>
                        <ListItemIcon className={this.props.open ? classes.iconSmall : classes.iconBig}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText inset primary={item.title}/>
                        <ListItemIcon className={classes.secondaryIcon}>
                            {isExpanded ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemIcon>
                    </ListMenuItem>
                )
                yield (
                    <Collapse
                        key={path + "-group"}
                        in={isExpanded}
                        timeout="auto"
                        unmountOnExit>
                        {Array.from(this.buildNavigationLinks(item.items, item))}
                    </Collapse>
                )
            } else {
                yield (
                    <ListMenuItem key={path}
                                  button
                                  selected={this.props.history.location.pathname === path}
                                  onClick={() => this.props.history.push(path)}
                                  className={parentItem && this.props.open ? this.props.classes.nestedItem : ""}>
                        <ListItemIcon className={this.props.open ? classes.iconSmall : classes.iconBig}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText inset primary={item.title} color="inherit"/>
                    </ListMenuItem>
                )
            }
        }
    }
}

export const Navigator: ComponentType<ExternalProps> = withStyles(styles)(withRouter(_Navigator))