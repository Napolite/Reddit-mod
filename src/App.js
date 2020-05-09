import React, { Component } from "react";
import Post from "./post.jsx";
import { items } from "./static";

class App extends Component {
	state = {
		items: items
	};
	render() {
		return (
			<div className='main'>
				{this.state.items.map(item => {
					return <Post key={item.id} postItem={item} />;
				})}
			</div>
		);
	}
}

export default App;
