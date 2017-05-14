First Time to Visit the App

1. landing page
2. client directed to login
3. client submits email and new password
4. client is authenticated.

Client is now a user, Mike's code tells the server they're authenticated
1. user directed to dashboard page
  - server sends JSON from the All Resources table.
  - front end receives the JSON, turns it into a usable object with access to functions in the resource prototype that deal with resource interactions.
  - server sends JSON from the user's unique User Roadmap table.
  - front end recieves the JSON, turns it into a usable object that has access to the functions in the resource prototype. 
1. user sees their roadmap, calendar, blank global resources list, empty GitHub modal, and empty Stack Overflow modal.
2. user clicks on a topic
  - front end logic renders the resources for that topic
  - front end logic loads global resources associated with that topic.
  - front end logic sends a get request to GitHub api
    - front end renders GitHub results
  - front end logic sends a get request to Stack Overflow api
    - front end renders Stack Overflow results
3. user drags a resource into their roadmap topic
  - front end logic adds the resource to the user's roadmap object
4. user clicks a different topic
  - front end sends a put request to the server with the updated resources from the last topic they were on.
  - server receives the put request and sequelize updates the database
  - front end renders resources for the current topic using data already stored in the heap. no db query needed
5. user adds a new resource
  - front end click event adds the resource to the global resources object stored in the heap. no db query needed.
  - click event also triggers render of the resource in the global resources modal
6. user deletes a resource from their roadmap
  - front end removes the resource from the roadmap object stored in the heap.
7. user drags a card from Stack Overflow or GitHub to their roadmap
  - front end turns it into a resource and adds it to the roadmap object
  - front end also adds it to the global resources object 
8. user clicks save roadmap (guess we need a save button)
  - front end send put request to the route for updating the roadmap
  - front end sends put request to the route for updating the global resource
  - back end receives the requests on their corresponding routes and sequelize updates the database

-questionmarks-
THE CALENDAR:
  I'm assuming this functionality is totally compartmentalized from the rest of the front end logic. 
  Does anything special need to be done to save the user's calendar data to the database? We can probably do a put request to update the DB every time they make a change to the calendar because they won't be pounding away on it.

USER SESSION TERMINATES UNEXPECTEDLY
  right now they're going to lose all unsaved changes. that can be changed but it's on the bottom of my list. fuck the user.
