import React, {Component} from "react";

class ClassComponent extends Component {
    render() {
        return <p>Class Component</p>;
    }
}


function FunctionComponent() {
    return <p>Function Component</p>;
}

const ArrowFunctionComponent = () => {
    return <p>Arrow Function Component</p>;
}

export { ClassComponent, FunctionComponent, ArrowFunctionComponent };