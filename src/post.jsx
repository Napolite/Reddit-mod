import React, { Component } from "react";

class Post extends Component {
	state = {
		postItem: this.props.postItem,
		votecount: 0
	};
	upvote = () => {
		this.setState({
			votecount: this.state.votecount + 1
		});
	};
	downvote = () => {
		this.setState({
			votecount: this.state.votecount - 1
		});
	};
	render() {
		const postItem = this.state.postItem;
		return (
			<div className='post'>
				<div className='votes'>
					<button onClick={this.upvote}> upvote </button>
					<p>{this.state.votecount}</p>
					<button onClick={this.downvote}>downvote</button>
				</div>
				<img src={postItem.image} className='image' />
				<div>
					<div className='post-name'>{postItem.name}</div>
					<div className='url'>{postItem.url}</div>
					<div className='submit'>
						<p>submited {postItem.time} by</p>
						<p>{postItem.user}</p>
					</div>
					<div className='comments'>
						{postItem.comments} share save hide report
					</div>
				</div>
			</div>
		);
	}
}

export default Post;
