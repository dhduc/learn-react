let Input = React.createClass({
	onAddClick: function () {
		let websiteInput = React.findDOMNode(this.refs.newWesite);
        this.props.handleAddNewWebsite(websiteInput.value);
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="newWesite"/>
                <button onClick={this.onAddClick}>Add Website</button>
            </div>
        );
    }
});

let Website = React.createClass({
    render: function () {
        return (
            <li>{this.props.name}</li>
        );
    }
});

let WebsiteList = React.createClass({
    getDefaultProps: function () {
        return {
            websites: ["Udemy", "Codeschool", "Pluralsight"]
        };
    },
	addNewWebsite: function (website) {
		let websites = this.props.websites;

		websites.push(website);

		this.setProps({
			websites: websites
		})
    },
    render: function () {
        let websites = this.props.websites.map(function (website) {
            return ( <Website name={website}/> );
        });
        return (
            <div>
                <Input handleAddNewWebsite={this.addNewWebsite} />
                <ul>
                    {websites}
                </ul>
            </div>
        );
    }
});


React.render(
    <WebsiteList />,
    document.getElementById("website")
);