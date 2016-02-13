![frontpage](https://cloud.githubusercontent.com/assets/13400593/13030374/8f359b42-d25d-11e5-9df5-df947cf8715f.jpg)

![dashboard](https://cloud.githubusercontent.com/assets/13400593/13030382/ac34a7f6-d25d-11e5-8ab4-2c9e7703029d.png)

# Eventify

Crowdfund an event with friends or strangers!

## Team

  - __Product Owner | Full-Stack Engineer__: Delphine Foo-Matkin
  - __Scrum Master | Full-Stack Engineer__: Kristen Haydel
  - __Front End Engineer | User Experience Design__: Vincent Jo, 
  - __Full-Stack Engineer | DevOps Specialist__: Oleg Umarov


## Table of Contents

1. [Team](#team)
2. [Usage](#Usage)
3. [Development](#development)
  1. [Installing Dependencies](#installing-dependencies)
  2. [Contributing](#contributing)
4. [Internal APIs](#internal-apis)
  1. [Test Data](#test-data)
  2. [DB Schema](#db-schema)
  3. [Server API](#server-api)


## Usage

Users can view existing events without having to register. In order to join an existing events or create an event for others to join, they need to register. To join, the user just needs to click on the event they’re interested in, and click ‘join’. An IOU is then created between the participant and the organizer. The event is updated, showing current number of participants against the minimum number of people needed to run the event. The event will be added to the participant’s list of events they’ve joined.To create an event, the user clicks on ‘Create Event’, filling out details (including minimum number of participants needed to kickstart the event, and the price per person) and uploading an image. Once submitted, the event will show up on the main events page and others can join it.


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
Make sure you have [Node](https://nodejs.org/en/) installed, and then from within the root directory:

```sh
npm install
```

This will handle both client and server-side dependencies as outlined in [package.json](package.json).
### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.


## Internal APIs
On any project there are many internal APIs. For ease of reference, for both the development team and future contributers, they are exhaustively documented here.

### Test

```sh
npm test
```

Additionally, this repo contains a dummy-data file that will help you test feel
and look. To add records to the database just run:
```sh
./dummy-data.sh
```

### DB Schema
There are two types of objects stored in the database: users and event. To minimize http requests on the server, when retrieved, all references to other objects will be fully populated with complete objects, not just is numbers. The schema are as follows:

####[User](server/config/controllers/userController.js)
```javascript
{
  username           :  ...   // String
  password           :  ...   // String
  firstName          :  ...   // String
  lastName           :  ...   // String
}

```

####[Node](server/config/controllers/eventController.js)
```javascript
{
  title        :  ...  // String
  description  :  ...  // String
  imageUrl     :  ...  // String
  created      :  ...  // Date
  updated      :  ...  // Date
}

```


### Server API
The server uses a stateless RESTful API for all database access. It supports four HTTP verbs: `GET` for retrieving data, `POST` for creating new objects, `PUT` for updating existing objects, and `DELETE` for removing objects. *NOTE: All `POST`, `PUT`, and `DELETE` routes require an authorization token, with the exception of `POST /api/signup`.*

#### The Routes
Most routes follow a `/api/:data_type/:data_identifier` pattern. Note that when an aspect of a route is prefaced with a colon `:` it refers to a variable. Do not actually write down a colon in any api calls. Additionally, ALL of the following routes must be prefaced with `/api`.

```javascript
GET     /login                // Authenticate user
POST    /signup               // Create a user

GET     /users                // Get an array of users
GET     /users/:username      // Get a specific user
PUT     /users/:username      // Update the user's info
DELETE  /users/:username      // Delete the user


GET     /events             // Get an array of events
GET     /events/:eventId    // Get a specific event
POST    /events             // Create a new event
PUT     /events/:eventId    // Update a event
DELETE  /events/:eventId    // Delete a event


