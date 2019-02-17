import React, {ReactElement, useState} from 'react';
import {createStyles, MuiThemeProvider, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {SideNavBar} from "./SideNavBar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {purple} from "@material-ui/core/colors";
import {HeaderBar} from "./HeaderBar";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {NavItem, navItems} from "./navigation";
import PerfectScrollbar from 'react-perfect-scrollbar'
import {ScrollToTop} from "../components/ScrollToTop";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00C1DE',
            contrastText: '#ffffff'
        },
        secondary: purple,
        background: {
            default: "#F5F5F5"
        }
    },
    typography: {
        useNextVariants: true
        //     fontSize: 13,
    }
});

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        height: '100vh',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: 0,
        height: `100vh`,
        overflow: 'hidden',
    },
    scrollContent: {
        height: `calc(100% - 60px)`, // how to get the appbar height from theme....?
    }
});

type Props = WithStyles<typeof styles>

const App = ({classes}: Props) => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <MuiThemeProvider theme={theme}>

            <Router>
                <div className={classes.root}>
                    <CssBaseline/>
                    <HeaderBar open={drawerOpen} onToggleDrawer={() => setDrawerOpen(!drawerOpen)}/>
                    <SideNavBar open={drawerOpen}/>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer}/>
                        <div className={classes.scrollContent}>
                            <ScrollToTop>
                                <PerfectScrollbar>
                                    <Switch>
                                        {Array.from(buildRoutes())}
                                    </Switch>
                                </PerfectScrollbar>
                            </ScrollToTop>
                        </div>
                    </main>
                </div>
            </Router>
        </MuiThemeProvider>
    );
}

function* buildRoutes(items: NavItem[] = navItems, parentItem: NavItem | undefined = undefined): IterableIterator<ReactElement<any>> {
    for (let item of items) {
        const path = (parentItem ? parentItem.path : "") + item.path
        if (item.type === "link") {
            console.log(`Link to ${path} page ${item.title}`)
            yield <Route key={path} path={path} component={item.page}/>
        } else {
            console.log(`Group to ${path} page ${item.title}`)
            yield <Redirect key={path} exact path={path} to={path + item.items[0].path}/>
            yield* buildRoutes(item.items, item)
        }
    }

}

export default withStyles(styles)(App);