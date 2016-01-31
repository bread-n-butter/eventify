import expect from 'expect';
import deepFreeze from 'deep-freeze';

//Import reducer function
import eventReducer from '../src/reducers/reducer_events';

describe('Event Reducer Function', () => {
  
  function stateBefore() {
    return {
      all: [],
      event: null,
      isLoggedIn: false,
      eventEdit: null
    };
  }
  
  it('should update state after fetching events', () => {
     
    const action = {
      type: 'FETCH_EVENTS',
      payload: {data: {data: [ {eventName: 'Yahoo!'} ] } }
    };
    
    const actual = eventReducer(stateBefore(), action);
    
    const expected = {
      all: [{eventName: 'Yahoo!'}],
      event: null,
      isLoggedIn: false,
      eventEdit: null
    };
    
    expect(actual).toEqual(expected);
    
  });
  
  it('should update state after creating an event', () => {
    
    const action = {
      type: 'CREATE_ONE_EVENT',
      payload: {created: true} 
    };
    
    const actual = eventReducer(stateBefore(), action);
    
    const expected = {
      all: [],
      event: null,
      isLoggedIn: false,
      eventEdit: null,
      createdEvent: {created: true}
    };
    
    expect(actual).toEqual(expected);
    
  });
  
  it('should update state after fetching one specific event with id', () => {
    
    const action = {
      type: 'FETCH_ONE_EVENT',
      payload: {fetched: true} 
    };
    
    const actual = eventReducer(stateBefore(), action);
    
    const expected = {
      all: [],
      event: null,
      isLoggedIn: false,
      eventEdit: null,
      fetchedEvent: {fetched: true}
    };
    
    expect(actual).toEqual(expected);
    
  });
  
});









