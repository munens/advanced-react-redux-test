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
			<form 
				className="comment-box" 
				onSubmit={(event) => { 
					event.preventDefault(); 
					this.setState({ comment: '' })}
				}>
				<textarea 
					value={this.state.comment} 
					onChange={(event) => this.setState({ comment: event.target.value })}>
				</textarea>
				<button action="submit">Submit comment</button>
			</form>
		);
	}
}