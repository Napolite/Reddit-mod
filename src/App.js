import React, { Component } from "react";
import Post from "./post.jsx";
import { items } from "./static";

class App extends Component {
	state = {
		items: items
	};
	upvote = (id) => {
		const item = [...this.state.items]
		item[item.indexOf(id)].votes+=1
		this.setState({
			items:item
		})
	};
	downvote = (id) => {
		const item = [...this.state.items]
		item[item.indexOf(id)].votes-=1
		this.setState({
			items:item
		})
	};
	render() {
		return (
			<div className='main'>
				{this.state.items.sort((a,b)=>{return b.votes-a.votes}).map(item => {
					return <Post key={item.id} postItem={item} upvote={this.upvote} downvote={this.downvote} />;
				})}
			</div>
		);
	}
}

export default App;
