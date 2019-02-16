import React, {ReactElement} from "react"
import {Dashboard} from '@material-ui/icons';

import {RouterProps} from "react-router";
import SomePage from "../pages/SomePage";

interface NavItemBase {
    title: string,
    icon: ReactElement<any>,
    path: string,
}

interface NavLinkItem extends NavItemBase {
    type: "link",
    page: (props: RouterProps) => ReactElement<any>
}

interface NavGroupItem extends NavItemBase {
    type: "group",
    items: Array<NavLinkItem>
}

export type NavItem = NavLinkItem | NavGroupItem

export const navItems: Array<NavItem> = [
    {
        type: "link",
        title: "Start",
        icon: <Dashboard/>,
        path: "/page-1",
        page: () => <SomePage page={1}/>
    },
    {
        type: "group",
        title: "Nested",
        icon: <Dashboard/>,
        path: "/nested",
        items: [
            {
                type: "link",
                title: "Page 2",
                icon: <Dashboard/>,
                path: "/page-2",
                page: () => <SomePage page={2}/>
            },
            {
                type: "link",
                title: "Page 3",
                icon: <Dashboard/>,
                path: "/page-3",
                page: () => <SomePage page={3}/>
            },
            {
                type: "link",
                title: "Page 4",
                icon: <Dashboard/>,
                path: "/page-4",
                page: () => <SomePage page={4}/>
            },
        ]
    },
    {
        type: "group",
        title: "Nested Again",
        icon: <Dashboard/>,
        path: "/nested_again",
        items: [
            {
                type: "link",
                title: "Page 5",
                icon: <Dashboard/>,
                path: "/page-5",
                page: () => <SomePage page={5}/>
            },
            {
                type: "link",
                title: "Page 6",
                icon: <Dashboard/>,
                path: "/page-6",
                page: () => <SomePage page={6}/>
            },
            {
                type: "link",
                title: "Page 7",
                icon: <Dashboard/>,
                path: "/page-7",
                page: () => <SomePage page={7}/>
            },
        ]
    },
    {
        type: "link",
        title: "About",
        icon: <Dashboard/>,
        path: "/about",
        page: () => <SomePage page={8}/>
    },
    {
        type: "link",
        title: "Contact",
        icon: <Dashboard/>,
        path: "/contact",
        page: () => <SomePage page={9}/>
    }
]
