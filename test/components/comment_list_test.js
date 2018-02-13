import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
	let component;

	beforeEach(() => {
		// create props for our CommentList component:
		const props = { comments: ['new comment', 'other new comment'] };
		// render component takes in 3 arguments: i). the component, ii). , iii). and props:
		component = renderComponent(CommentList, null, props);
	});

	it('shows an LI for each comment', () => {
		// expect the 'li' length to be '2':
		expect(component.find('li').length).to.equal(2);
	});

	it('shows each comment that is provided', () => {
		expect(component).to.contain('new comment');
		expect(component).to.contain('other new comment');
	});

})