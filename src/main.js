
let Title = React.createClass({
    getDefaultProps: function () {
        return {
            title: "Github"
        }
    },
    render: function () {
        return (
            <h1>{this.props.title}</h1>
        );
    }
});

let UserInput = React.createClass({
    onAddClick: function () {
        let elmUsername = React.findDOMNode(this.refs.username);
        let username = elmUsername.value;
        elmUsername.value = "";

        this.props.handleAddUser(username);
    },
    onDeleteClick: function () {
        let elmUsername = React.findDOMNode(this.refs.username);
        let username = elmUsername.value;
        elmUsername.value = "";

        this.props.handleDeleteUser(username);
    },
    render: function () {
        return (
            <div>
                <div className="input-field col s8">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="validate" ref="username"/>
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

let User = React.createClass({
    getDefaultProps: function () {
        return {
            user: {
                "login": "reactjs",
                "id": 6412038,
                "avatar_url": "https://avatars7.githubusercontent.com/u/6412038?v=4",
                "url": "https://api.github.com/users/reactjs",
                "html_url": "https://github.com/reactjs",
                "type": "Organization",
                "name": "React Community",
                "bio": "Quality code from the React community https://facebook.github.io/react",
                "created_at": "2014-01-15T17:46:37Z",
                "updated_at": "2017-05-19T17:09:07Z"
            }
        }
    },
    render: function () {
        return (
            <div className="chip">
                <img src={this.props.user.avatar_url} alt={this.props.user.name}/>
                <a href={this.props.user.html_url} target="_blank">
                    {this.props.user.name}
                </a>
            </div>
        );
    }
});

let UserList = React.createClass({
    getDefaultProps: function () {
        return {
            users: [
                {
                    "login": "reactjs",
                    "id": 6412038,
                    "avatar_url": "https://avatars7.githubusercontent.com/u/6412038?v=4",
                    "url": "https://api.github.com/users/reactjs",
                    "html_url": "https://github.com/reactjs",
                    "type": "Organization",
                    "name": "React Community",
                    "bio": "Quality code from the React community https://facebook.github.io/react",
                    "created_at": "2014-01-15T17:46:37Z",
                    "updated_at": "2017-05-19T17:09:07Z"
                }
            ]
        }
    },
    render: function () {
        let users = this.props.users.map(function (user) {
            return ( <User user={user}/>);
        });
        return (
            <div>
                {users}
            </div>
        )
    }
});

let GithubApp = React.createClass({
    getDefaultProps: function () {
        return {}
    },
    getInitialState: function () {
        return {
            users: []
        }
    },
    addNewUser: function (newUser) {
        let components = this;
        $.get('https://api.github.com/users/' + newUser, function (data) {
            let users  = components.state.users;
            users.push(data);
            components.setState({
                users: users
            });
        })
    },
    deleteUser: function (username) {
        let users = this.state.users;
        for (let i = 0; i < users.length; i++) {
            if (users[i].login == username) {
                users.splice(i, 1);
                break;
            }
        }
        this.setState({
            users: users
        });
    },
    render: function () {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <Title />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <UserInput handleAddUser={this.addNewUser} handleDeleteUser={this.deleteUser} />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col s10">
                            <UserList users={this.state.users} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

React.render(
    <GithubApp />,
    document.getElementById("root")
);