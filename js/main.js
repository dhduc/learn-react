import ReactDOM from "react-dom";
import React from "react";

let Title = React.createClass({
    getDefaultProps: function () {
         return {
            title: "Github"
        }
    },
    render: function ()  {
        return (
            <h1>{this.props.title}</h1>
        );
    }
});


let UserInput = React.createClass({
    onAddClick: function () {
         let elmUsername = React.findDOMNode(this.refs.username);
         let username = elmUsername.value;
        console.log('username', username);
         elmUsername.value = "";

         this.props.handleAddUser(username);
    },
    onDeleteClick: function () {
         let elmUsername = React.findDOMNode(this.refs.username);
         let username = elmUsername.value;
         elmUsername.value = "";

         this.props.handleDeleteUser(username);
    },
    render: function ()  {
        return (
            <div>
                <div className="input-field col s8">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="validate" ref="username" />
                </div>
                <div className="col s4">
                    <button onClick={this.onAddClick} className="waves-effect waves-teal btn">Add</button>
                    <button onClick={this.onDeleteClick} className="waves-effect waves-teal btn red darken-1">Delete
                    </button>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <Title title="Github User"/>,
    document.getElementById("title")
);

ReactDOM.render(
    <UserInput />,
    document.getElementById("userinput")
);