import React, {ReactElement} from "react"
import {Dashboard, SmokeFree, ChildCare, FilterVintage, Toys, KeyboardArrowRight as GutterIcon} from '@material-ui/icons';

import {RouteComponentProps} from "react-router";
import SomePage from "pages/SamplePage";
import ReactVirtualizedTable from "pages/VirtualizedTableDemo";

export interface NavItemBase {
    title: string,
    icon: ReactElement<any>,
    path: string,
}

export interface NavLinkItem extends NavItemBase {
    type: "link",
    page: (prop: RouteComponentProps<any>) => ReactElement<any>
}

export interface NavGroupItem extends NavItemBase {
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
        page: () => <ReactVirtualizedTable/>
    },
    {
        type: "group",
        title: "Nested",
        icon: <SmokeFree/>,
        path: "/nested",
        items: [
            {
                type: "link",
                title: "Page 2",
                icon: <GutterIcon/>,
                path: "/page-2",
                page: () => <SomePage page={2}/>
            },
            {
                type: "link",
                title: "Page 3",
                icon: <GutterIcon/>,
                path: "/page-3",
                page: () => <SomePage page={3}/>
            },
            {
                type: "link",
                title: "Page 4",
                icon: <GutterIcon/>,
                path: "/page-4",
                page: () => <SomePage page={4}/>
            },
        ]
    },
    {
        type: "group",
        title: "Nested Again",
        icon: <ChildCare/>,
        path: "/nested_again",
        items: [
            {
                type: "link",
                title: "Page 84",
                icon: <GutterIcon/>,
                path: "/page-84",
                page: () => <SomePage page={84}/>
            },
            {
                type: "link",
                title: "Page 85",
                icon: <GutterIcon/>,
                path: "/page-85",
                page: () => <SomePage page={85}/>
            },
            {
                type: "link",
                title: "Page 86",
                icon: <GutterIcon/>,
                path: "/page-86",
                page: () => <SomePage page={86}/>
            },
            {
                type: "link",
                title: "Page 87",
                icon: <GutterIcon/>,
                path: "/page-87",
                page: () => <SomePage page={87}/>
            },
            {
                type: "link",
                title: "Page 88",
                icon: <GutterIcon/>,
                path: "/page-88",
                page: () => <SomePage page={88}/>
            },
            {
                type: "link",
                title: "Page 89",
                icon: <GutterIcon/>,
                path: "/page-89",
                page: () => <SomePage page={89}/>
            },
            {
                type: "link",
                title: "Page 90",
                icon: <GutterIcon/>,
                path: "/page-90",
                page: () => <SomePage page={90}/>
            },
            {
                type: "link",
                title: "Page 91",
                icon: <GutterIcon/>,
                path: "/page-91",
                page: () => <SomePage page={91}/>
            },
            {
                type: "link",
                title: "Page 92",
                icon: <GutterIcon/>,
                path: "/page-92",
                page: () => <SomePage page={92}/>
            },
            {
                type: "link",
                title: "Page 93",
                icon: <GutterIcon/>,
                path: "/page-93",
                page: () => <SomePage page={93}/>
            },
            {
                type: "link",
                title: "Page 94",
                icon: <GutterIcon/>,
                path: "/page-94",
                page: () => <SomePage page={94}/>
            },
            {
                type: "link",
                title: "Page 95",
                icon: <GutterIcon/>,
                path: "/page-95",
                page: () => <SomePage page={95}/>
            },
            {
                type: "link",
                title: "Page 96",
                icon: <GutterIcon/>,
                path: "/page-96",
                page: () => <SomePage page={96}/>
            },
            {
                type: "link",
                title: "Page 97",
                icon: <GutterIcon/>,
                path: "/page-97",
                page: () => <SomePage page={97}/>
            },
            {
                type: "link",
                title: "Page 98",
                icon: <GutterIcon/>,
                path: "/page-98",
                page: () => <SomePage page={98}/>
            },
            {
                type: "link",
                title: "Page 99",
                icon: <GutterIcon/>,
                path: "/page-99",
                page: () => <SomePage page={99}/>
            },
        ]
    },
    {
        type: "link",
        title: "About",
        icon: <Toys/>,
        path: "/about",
        page: () => <SomePage page={8}/>
    },
    {
        type: "link",
        title: "Contact",
        icon: <FilterVintage/>,
        path: "/contact",
        page: () => <SomePage page={9}/>
    }
]


export const findItems = (path: string): NavItem[] => Array.from(traverseItems(path))

function* traverseItems(path: string, items: NavItem[] = navItems, parentItem?: NavItem): IterableIterator<NavItem> {
    for (let item of items) {
        if (item.type === "link") {
            const itemPath = (parentItem ? parentItem.path : "") + item.path
            if (itemPath === path) {
                if (parentItem) yield  parentItem
                yield item
            }
        } else {
            yield* traverseItems(path, item.items, item)
        }
    }
}
