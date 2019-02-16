import React, {Component} from "react"


interface Props {
    title: string
}

export class ClassWithDefaultProps extends Component<Props>{
    static defaultProps = {
        title: "arne anak"
    }

    render() {
        return <div>{this.props.title}</div>
    }
}