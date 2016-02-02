curl -H "Content-Type: application/json" -X POST -d '{"firstName":"John","lastName":"Smith", "email": "johnsmith@aol.com"}' http://localhost:3000/api/users

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Johns LaserTag Party", "totalPeople": "30", "pricePerPerson":"35", "image_url": "https://s3-us-west-1.amazonaws.com/eventify-photos/laser-tag-square-500.jpg", "description":"An amazing night of lasertag that will include fun and drinks", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"New Orleans Amazing Race", "totalPeople": "200", "pricePerPerson":"20", "image_url": "https://s3-us-west-1.amazonaws.com/eventify-photos/scavenger-hunt-square-500.jpg", "description":"Come join our once-in-a-lifetime scavenger hunt where you can run around and be silly with a group of strangers and friends", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Johns House Party", "totalPeople": "40", "pricePerPerson":"10", "image_url": "https://s3-us-west-1.amazonaws.com/eventify-photos/house-party-square-500.jpg", "description":"Hey guys, I plan on having a party at my house, but need help with the cost. The party will include simple food and drinks", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Room Escape", "totalPeople": "10", "pricePerPerson":"25", "image_url": "https://s3-us-west-1.amazonaws.com/eventify-photos/escape-room-square-500.jpg", "description":"My girlfriend and I are interesting in doing this escape the room type game, and we need you to join to make the minimum person requirements!", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Dinner for a Cause", "totalPeople": "100", "pricePerPerson":"50", "image_url": "https://s3-us-west-1.amazonaws.com/eventify-photos/dinner-party-square-500.jpg", "description":"Come join a good cause and have some great food. The money will go to supporting the local community", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Sunset Charter Sail", "totalPeople": "30", "pricePerPerson":"20", "image_url": "https://s3-us-west-1.amazonaws.com/eventify-photos/sunset-sail-square-500.jpg", "description":"Come join a good cause and have some great food. The money will go to supporting the local community", "userId": "1"}' http://localhost:3000/api/events
