import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box'; 

// library being used for testing: https://github.com/chaijs/chai-jquery

describe('CommentBox', () => {

	it('has the correct class', () => {
		const component = renderComponent(CommentBox);
		expect(component).to.have.class('comment-box');
	})

	it('has a textarea', () => {

		// component here actually returns a jquery object that contains our react component:
		const component = renderComponent(CommentBox);
		// since 'component' is actually a jquery object, we can use the .find method in jquery:
		// - expect(), .to and .exist all 
		expect(component.find('textarea')).to.exist;

	});

	it('has a button', () => {
		const component = renderComponent(CommentBox);
		expect(component.find('button')).to.exist
	});
			
});