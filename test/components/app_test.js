// import helprer files off 'test_helper.js':
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// test for the app component:

// test that our app component says 'Redux simple starter':

// use describe to group together similar tests:
// - pass a simple string to say what our tests are related to - to help us when our actual tests take place.
describe('App', () => {
  let component;

  beforeEach(() => component = renderComponent(App));

  /*
  // whithin 'App' are all of the tests that are grouped together for 'App' or this 'spec:

  // use 'it' to test a single attribute of a target:- in this case the text wihin a 'div'
  // - 'it' is used to report how our test did when it was run. 
  it('shows the correct text', () => {

    // let us get our component:
    const component = renderComponent(App);
    
    // 'expect' is used to make an assertion about a target:
    expect(component).to.contain('React simple starter');

  });*/

  // let us show that our app has a child component 'CommentBox':
  it('shows a comment Box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  // let us show that our app has a comment list:
  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  })
})


