import ReactDOM from "react-dom";
import React from "react";

class HelloMessage extends React.Component {
    render() {
        return <div><h1>Hello {this.props.name}</h1></div>;
    }
}

ReactDOM.render(<HelloMessage name="John" />, document.getElementById("root"));