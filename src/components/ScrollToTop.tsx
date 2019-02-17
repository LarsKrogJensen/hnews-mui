import {Component, ComponentType} from "react"
import {findDOMNode} from "react-dom"
import {RouteComponentProps, withRouter} from "react-router";

class _ScrollToTop extends Component<RouteComponentProps> {

    componentDidUpdate(prevProps: RouteComponentProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
            const element: any = findDOMNode(this);
            if (element && element.scrollTop) {
                element.scrollTop = 0
            }
        }
    }
    
    render() {
        return this.props.children
    }
}

export const ScrollToTop: ComponentType = withRouter(_ScrollToTop)