import expect from 'expect';
import courseReducer from './courseReducer';
import * as courseActions from '../actions/courseActions';
import * as types from '../actions/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Reducer', () => {

  it('should add course when passed CREATE_COURSE_SUCCESS', () => {

    //arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};
    const action = courseActions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');

  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {

    //arrangie
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = courseActions.updateCourseSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(c => c.id == 'B');
    const untouchedCourse = newState.find(c => c.id == 'A');

    //assert
    expect(newState.length).toEqual(3);
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');

  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here's an example call to nock
    /*
    nock('http://example.com')
      .get('/courses')
      .reply(200, {body: {course:[{id: 1, firstName: 'Cory', lastName: 'House'}]}});
    */

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses:[{id: 'clean-code', title: 'Clean Code'}]} }
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });
  });

});
