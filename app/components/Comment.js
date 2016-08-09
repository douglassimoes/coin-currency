var React = require('react');

console.log("Chegou no Comment");

/* Comment component
This component is reponsible for receive comments from clients that are logged on
Facebook and list them on the CommentBox.

This component is a composition of three components 
	CommentBox
		CommentList
			Comment
		CommentForm

*/


var CommentBox = React.createClass({
    render: function() {
        return (
            
            <div className = "commentBox">
			<h1> Comments : </h1>
			<CommentList />
            <CommentForm />
			</div>
        )
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
            <div className = "commentList">
            <Comment author="Father"> this is a example comment </Comment>
            <Comment author="Mother"> this is a example comment </Comment>
            </div>
        )
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className = "comment">
            <h2 className = "commentAuthor">{this.props.author}</h2>
            {this.props.children}
            </div>
        )
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className = "commentForm">Hello World</div>
        )
    }
});

module.exports = CommentBox; 