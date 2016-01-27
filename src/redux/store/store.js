/**
 *    State for the whole app in stored in Store.js
 */

//example from Redux docs page

// {
//   selectedSubreddit: 'frontend',
//   postsBySubreddit: {
//     frontend: {
//       isFetching: true,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [
//         {
//           id: 42,
//           title: 'Confusion about Flux and Relay'
//         }, 
//         {
//           id: 500,
//           title: 'Creating a Simple Application Using React JS and Flux Architecture'
//         }
//       ]
//     }
//   }
// }

// the didInvalidate is when the user presses the 'refresh' button


//OR

// {
//   selectedSubreddit: 'frontend',
//   entities: {
//     users: {
//       2: {
//         id: 2,
//         name: 'Andrew'
//       }
//     },
//     posts: {
//       42: {
//         id: 42,
//         title: 'Confusion about Flux and Relay',
//         author: 2
//       },
//       100: {
//         id: 100,
//         title: 'Creating a Simple Application Using React JS and Flux Architecture',
//         author: 2
//       }
//     }
//   },
//   postsBySubreddit: {
//     frontend: {
//       isFetching: true,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [ 42, 100 ]
//     }
//   }
// }

//for more complex applications, if you want to edit individual posts without having to look at different subreddits.



