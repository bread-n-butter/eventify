// /**
//  *    WIP. Cannot get nock to work nicely with Redux-Promise for now.
//  *    
//  */

// import expect from 'expect';

// import configureMockStore from 'redux-mock-store';
// import promise from 'redux-promise';
// import * as actions from '../src/actions';
// import nock from 'nock';
// import thunk from 'redux-thunk';

// const middleWare = [ thunk, promise ];
// const mockStore = configureMockStore(middleWare);

// describe('Async Actions', () => {
//   afterEach(() => {
//     nock.cleanAll();
//   });
  
//   it('makes HTTP request to api/events', (done) => {
//     nock('http://127.0.0.1:3000')
//       .get('/api/events/')
//       .reply(200, {data: { data: [ {creator: 'vincent'}, {}, {} ] } } );
      
//     const expectedActions = [
//       { type: 'FETCH_EVENTS', payload: {} }
//     ];
//     const store = mockStore({
//       all: [],
//       event: null,
//       isLoggedIn: false,
//       eventEdit: null
//     }, expectedActions, done);
//     store.dispatch(actions.fetchEvents());
//   });
  
  
// });

