import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions/index';

describe('actions', () => {
	let action;
	
	beforeEach(() => action = saveComment('new comment'));

	describe('saveComment', () => {
		
		it('has the correct type', () => {
			expect(action.type).to.equal(SAVE_COMMENT);
		});

		it('has the correct payload', () => {
			expect(action.payload).to.equal('new comment')
		});

	});
});