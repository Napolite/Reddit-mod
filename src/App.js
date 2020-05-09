import React, { Component } from "react";
import Post from "./post.jsx";
import { items } from "./static";

class App extends Component {
	state = {
		items: items
	};
	// upvote = (id) => {
	// 	this.setState({
	// 		votecount: this.state.items.indexOf(items.id).votes+1
	// 	});
	// };
	// downvote = (id) => {
	// 	this.setState({
	// 		votecount: this.state.items.indexOf(items.id).votes-1
	// 	});
	// };
	render() {
		return (
			<div className='main'>
				{this.state.items.map(item => {
					return <Post key={item.id} postItem={item} upvote={this.upvote} downvote={this.downvote} />;
				})}
			</div>
		);
	}
}

export default App;
