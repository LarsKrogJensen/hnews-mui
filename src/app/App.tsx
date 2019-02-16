import React, {useState} from 'react';
import {createStyles, MuiThemeProvider, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {SideBar} from "./SideBar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {purple} from "@material-ui/core/colors";
import {NavBar} from "./NavBar";
import {Redirect, Route, Switch, HashRouter as Router} from "react-router-dom";
import SomePage from "../pages/SomePage";


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
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
});

type Props = WithStyles<typeof styles>

const App = ({classes}: Props) => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <div className={classes.root}>
                    <CssBaseline/>
                    <NavBar open={drawerOpen} onToggleDrawer={() => setDrawerOpen(!drawerOpen)}/>
                    <SideBar open={drawerOpen}/>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer}/>
                        <Switch>
                            <Redirect exact path="/" to="/page-1"/>
                            <Route path="/page-1" component={() => <SomePage page={1}/>}/>
                            <Route path="/page-2" component={() => <SomePage page={2}/>}/>
                            <Route path="/page-3" component={() => <SomePage page={3}/>}/>
                            <Route path="/page-4" component={() => <SomePage page={4}/>}/>
                            <Route path="/page-5" component={() => <SomePage page={5}/>}/>
                            <Route path="/page-6" component={() => <SomePage page={6}/>}/>
                            <Route path="/page-7" component={() => <SomePage page={7}/>}/>
                            <Route component={() => <SomePage page={-1}/>}/>
                        </Switch>

                    </main>
                </div>
            </Router>
        </MuiThemeProvider>
    );

}

export default withStyles(styles)(App);