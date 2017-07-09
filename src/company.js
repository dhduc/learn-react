let Hello = React.createClass({

    getInitialState: function () {
        return {
            name: "ReactJS"
        };
    },

    getDefaultProps: function () {
        return {
            name: "ReactJS"
        };
    },

    render: function () {
        let styles = {
            marginTop: "50px"
        };
        return (
            <h1 className="title" style={styles}>Hello {this.props.name}</h1>
        );
    }
});

let Company = React.createClass({
    getInitialState: function () {
        return {
            companies: [
                "Facebook", "Google", "Apple", "Samsung"
            ],
            current: 1
        };
    },
    handleUserClick: function () {
        let companies = this.state.companies;
        let current = this.state.current;

        current += 1;

        if (current >= companies.length) {
            current = 0;
        }

        this.setState({
            current: current
        });
    },
    render: function () {
        return (
            <h3 onClick={this.handleUserClick}>Company Using: {this.state.companies[this.state.current]}</h3>
        );
    }
});

let Card = React.createClass({
    render: function () {
        return (
            <div>
                <Hello content={this.props.content}/>
                <Company />
            </div>
        );
    }
});

React.render(
    <Card name="ReactJS"/>,
    document.getElementById("company")
);