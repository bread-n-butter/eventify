curl -H "Content-Type: application/json" -X POST -d '{"firstName":"John","lastName":"Smith", "email": "johnsmith@aol.com"}' http://localhost:3000/api/users

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Johns LaserTag Party", "date": "2016-12-12", "totalPeople": "30", "pricePerPerson":"35", "description":"An amazing night of lasertag that will include fun and drinks", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"New Orleans Amazing Race", "date": "2016-01-13", "totalPeople": "200", "pricePerPerson":"20", "description":"Come join our once-in-a-lifetime scavenger hunt where you can run around and be silly with a group of strangers and friends", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Johns House Party", "date": "2016-03-25", totalPeople": "40", "pricePerPerson":"10", "description":"Hey guys, I plan on having a party at my house, but need help with the cost. The party will include simple food and drinks", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Room Escape", "date": "2016-05-10", "totalPeople": "10", "pricePerPerson":"25", "description":"My girlfriend and I are interesting in doing this escape the room type game, and we need you to join to make the minimum person requirements!", "userId": "1"}' http://localhost:3000/api/events

curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Dinner for a Cause", "date": "2016-08-08", "totalPeople": "100", "pricePerPerson":"50", "description":"Come join a good cause and have some great food. The money will go to supporting the local community", "userId": "1"}' http://localhost:3000/api/events