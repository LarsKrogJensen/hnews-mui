import React, {ComponentType, ReactElement, useState} from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {SideNavBar} from "./SideNavBar";
import {HeaderBar} from "./HeaderBar";
import {Redirect, Route, Switch} from "react-router-dom";
import {NavItem, navItems} from "./navigation";
import PerfectScrollbar from 'react-perfect-scrollbar'
import {ScrollToTop} from "../components/ScrollToTop";
import {NotFoundPage} from "../pages/NotFoundPage";

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
        height: `calc(100% - ${theme.mixins.toolbar.maxHeight}px)`,
    }
});

type Props = WithStyles<typeof styles>

const _Scaffold = ({classes}: Props) => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
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
    );
}

function* buildRoutes(items: NavItem[] = navItems, parentItem?: NavItem): IterableIterator<ReactElement<any>> {
    if (!parentItem) {
        yield <Redirect key="/" exact path="/" to={items[0].path}/>
    }
    for (let item of items) {
        const path = (parentItem ? parentItem.path : "") + item.path
        if (item.type === "link") {
            yield <Route key={path} path={path} component={item.page}/>
        } else {
            yield <Redirect key={path} exact path={path} to={path + item.items[0].path}/>
            yield* buildRoutes(item.items, item)
        }
    }
    if (!parentItem) {
        yield <Route key="not-found" component={NotFoundPage}/>
    }
}

export const Scaffold: ComponentType = withStyles(styles)(_Scaffold);