import ReactDOM from "react-dom";
import React from "react";

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>{this.props.title}</h1>
    }
}
Title.defaultProps = {
    title: "Github"
};

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.onAddClick = this.onAddClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    onAddClick() {
        let username = this.username.value;
        this.username.value = "";
    }
    onDeleteClick() {
        let username = this.username.value;
        this.username.value = "";
    }
    render() {
        return  <div>
                    <div className="input-field col s8">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" className="validate" ref={(username) => { this.username = username; }} />
                    </div>
                    <div className="col s4">
                        <button onClick={this.onAddClick} className="waves-effect waves-teal btn">Add</button>
                        <button onClick={this.onDeleteClick} className="waves-effect waves-teal btn red darken-1">Delete</button>
                    </div>
                </div>
    }
}

ReactDOM.render(
    <Title title="Github User"/>,
    document.getElementById("title")
);

ReactDOM.render(
    <UserInput />,
    document.getElementById("userinput")
);