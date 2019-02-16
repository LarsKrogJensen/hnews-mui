import React, {Component} from 'react';
import {NavBar} from "./NavBar";
import {CssBaseline} from "@material-ui/core";
import {ClassWithDefaultProps} from "../components/ClassWithDefautProps";
import {Counter} from "../components/HooksSample";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {purple} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00C1DE',
        },
        secondary: purple,
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                {/*<CssBaseline/>*/}
                <NavBar title="Offering Manager"/>
                <ClassWithDefaultProps/>
                <Counter/>
            </MuiThemeProvider>
        );
    }
}

export default App;
