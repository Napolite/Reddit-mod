import React, { Component } from "react";

class Post extends Component {
	state = {
		postItem: this.props.postItem,
		votecount: 0
	};
	
	render() {
		const postItem = this.state.postItem;
		return (
			<div className='post'>
				<div className='votes'>
					<button onClick={() =>this.props.upvote(postItem.id)}> upvote </button>
					<p>{postItem.votes}</p>
					<button onClick={() => this.props.downvote(postItem.id)}>downvote</button>
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
