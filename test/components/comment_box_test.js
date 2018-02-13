import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box'; 

// library being used for testing: https://github.com/chaijs/chai-jquery

describe('CommentBox', () => {

	let component;

	// function that is run before every 'it' statement:
	beforeEach(() => component = renderComponent(CommentBox));

	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	})

	it('has a textarea', () => {

		// component here actually returns a jquery object that contains our react component:
		// since 'component' is actually a jquery object, we can use the .find method in jquery:
		// - expect(), .to and .exist all are from chai-jquery
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist
	});

	// if we have 'it' statements that are closely related then we can have a nested 'describe' statement:
	describe('entering some text', () => {

		// the .beforeEach above is stil usable here. We can create another one just for the 'it' statements below:
		// - however, before the 'it' statement functions below are run the beforeEach above will be run , followed by the one in this file.
		
		// - beforeEach() below will be used to populate the text area
		beforeEach(() => {
			// - a 'textarea' html element is being found here with .find()
			// - when the user types in the textarea they are creating a 'change' event. 
			// - therefore .simulate() is simulating a 'change' event by adding the text 'new comment'
			component.find('textarea').simulate('change', 'new comment');
		});

		it('shows text that is entered in text area', () => {
			expect(component.find('textarea')).to.have.value('new comment');
		});
	
		it('when submitted, clears the input', () => {
	
		});

	})
	
			
});