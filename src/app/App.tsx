import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {purple} from "@material-ui/core/colors";
import {HashRouter as Router} from "react-router-dom";
import {Scaffold} from "./Scaffold";

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
    mixins: {
        toolbar: {
            minHeight: 60,
            maxHeight: 60
        }
    },
    typography: {
        useNextVariants: true
    }
});

export default () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Scaffold/>
            </Router>
        </MuiThemeProvider>
    );
}
