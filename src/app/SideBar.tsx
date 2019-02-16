import React, {Component, ComponentType, ReactElement} from "react"
import classNames from "classnames";
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import {createStyles, MuiThemeProvider, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import logo from "./logo.svg"
import logo_small from "./logo_small.svg"
import {NavItem, navItems} from "./navigation"
import {Collapse, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

const drawerWidth = 240;

const theme: any = (theme: Theme) => createMuiTheme({
    palette: {
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
            }
        },
        MuiTypography: {
            subheading: {
                // fontSize: '0.9em',
                color: '#a1a1a1'
            }
        },
        MuiListItemIcon: {
            root: {
                color: '#a1a1a1',
            }
        },
        MuiSvgIcon: {
            root: {
                fontSize: 18
            }
        },
        // MuiListItem: {
        //     selected: {
        //         background: '#f00',
        //         "$focus": {
        //             background: '#0F0'
        //         }
        //     },
        // }
    }
});

const styles = (theme: Theme) => createStyles(
    {
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            borderRight: 0,
            zIndex: 9999,
            width: drawerWidth,
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
            width: theme.spacing.unit * 7,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing.unit * 9,
            },
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 8px',
            background: theme.palette.primary.main,
            height: 60,
            minHeight: 60,
            borderRadius: 0
        },
        nestedItem: {
            paddingLeft: theme.spacing.unit * 4,
            background: '#2F3439'
        },
        expanded: {
            background: '#2F3439'
        },
        secondaryIcon: {
            marginRight: 0
        },
        iconBig: {
            fontSize: 24,
            // transition: theme.transitions.create('fontSize', {
            //     easing: theme.transitions.easing.easeInOut,
            //     duration: theme.transitions.duration.enteringScreen,
            // }),
        },
        iconSmall: {
            fontSize: 18,
            // transition: theme.transitions.create('fontSize', {
            //     easing: theme.transitions.easing.easeInOut,
            //     duration: theme.transitions.duration.enteringScreen,
            // }),
        },
        listItemSelected: {
            root: {
                '&$selected': {
                    background: 'rgba(0, 0, 0, 0.12)',
                    color: 'white',
                    boxShadow: 'none',
                },
            },
            selected: {}
        }
    }
);

interface ExternalProps {
    open: boolean
}

interface State {
    expandedPath: string,
    selected: string
}

type Props = ExternalProps & WithStyles<typeof styles>


class SideBarComp extends Component<Props, State> {
    state = {
        expandedPath: "",
        selected: ""
    }

    handleClick = (expandedPath: string) => this.setState({expandedPath})

    render() {
        const {classes, open} = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Drawer
                    variant="permanent"
                    classes={{paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),}}
                    open={open}
                >
                    <div className={classes.logo}>
                        {!open && <img height={40} src={logo_small} alt="logo"/>}
                        {open && <img width={120} src={logo} alt="logo"/>}
                    </div>
                    <Divider/>
                    <List>
                        {this.buildNavigationLinks()}
                        {/*<MenuItem selected>*/}
                        {/*<ListItemIcon>*/}
                        {/*<DashboardIcon className={!open ? classes.iconBig : classes.iconSmall}/>*/}
                        {/*</ListItemIcon>*/}
                        {/*{open && <ListItemText primary="Dashboard"/>}*/}
                        {/*</MenuItem>*/}
                        {/*<ListItem button onClick={this.handleClick}*/}
                        {/*className={this.state.expanded ? classes.expanded : ""}*/}
                        {/*selected={false}>*/}
                        {/*<ListItemIcon>*/}
                        {/*<InboxIcon/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText inset primary="Inbox"/>*/}
                        {/*<ListItemIcon className={classes.secondaryIcon}>*/}
                        {/*{this.state.expanded ? <ExpandLess/> : <ExpandMore/>}*/}
                        {/*</ListItemIcon>*/}
                        {/*</ListItem>*/}

                        {/*<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>*/}
                        {/*<List disablePadding className={classes.expanded}>*/}
                        {/*<ListItem button className={classes.nestedItem}>*/}
                        {/*<ListItemIcon>*/}
                        {/*<GutterIcon/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText inset primary="Starred"/>*/}
                        {/*</ListItem>*/}
                        {/*<ListItem button className={classes.nestedItem}>*/}
                        {/*<ListItemIcon>*/}
                        {/*<StarBorder/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText inset primary="Starred"/>*/}
                        {/*</ListItem>*/}
                        {/*<ListItem button className={classes.nestedItem}>*/}
                        {/*<ListItemIcon>*/}
                        {/*<StarBorder/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText inset primary="Starred"/>*/}
                        {/*</ListItem>*/}
                        {/*<ListItem button className={classes.nestedItem}>*/}
                        {/*<ListItemIcon>*/}
                        {/*<StarBorder/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText inset primary="Starred"/>*/}
                        {/*</ListItem>*/}
                        {/*</List>*/}
                        {/*</Collapse>*/}
                        {/*<ListItem button>*/}
                        {/*<ListItemIcon>*/}
                        {/*<AssignmentIcon/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText primary="Current month"/>*/}
                        {/*</ListItem>*/}
                        {/*<MenuItem>*/}
                        {/*<ListItemIcon>*/}
                        {/*<AssignmentIcon/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText primary="Last quarter"/>*/}
                        {/*</MenuItem>*/}
                        {/*<ListItem button>*/}
                        {/*<ListItemIcon>*/}
                        {/*<AssignmentIcon/>*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText primary="Year-end sale"/>*/}
                        {/*</ListItem>*/}
                    </List>
                </Drawer>
            </MuiThemeProvider>
        )
    }


    buildNavigationLinks = (items: NavItem[] = navItems,
                            parentItem: NavItem | undefined = undefined): ReactElement<any>[] => {

        const elements: ReactElement<any>[] = [];

        for (const item of items) {
            const path = (parentItem ? parentItem.path : "") + item.path
            if (item.type === "group") {
                elements.push(
                    <ListItem key={path}
                              button
                              onClick={() => this.handleClick(path)}
                              className={this.state.expandedPath === path ? this.props.classes.expanded : ""}
                              selected={false}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText inset primary={item.title}/>
                        <ListItemIcon className={this.props.classes.secondaryIcon}>
                            {this.state.expandedPath === path ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemIcon>
                    </ListItem>
                )
                elements.push(
                    <Collapse in={this.state.expandedPath === path} timeout="auto" unmountOnExit>
                        {this.buildNavigationLinks(item.items, item)}
                    </Collapse>
                )
            } else {
                elements.push(
                    <ListItem key={path} button className={parentItem ? this.props.classes.nestedItem: ""}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText inset primary={item.title}/>
                    </ListItem>
                )
            }
        }

        return elements
    }


}

export const SideBar: ComponentType<ExternalProps> = withStyles(styles)(SideBarComp)