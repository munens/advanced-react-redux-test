import React, { Component } from 'react';

export default class CommentBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			comment: ''
		}
	}
	render() {
		return (
			<div className="comment-box">
				<textarea 
					value={this.state.comment} 
					onChange={(event) => this.setState({ comment: event.target.value })}>
				</textarea>
				<button>Submit comment</button>
			</div>
		);
	}
}