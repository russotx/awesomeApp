# User Logged in and sent to dashboard

  1. Loaded by Handlebars:
    - Resource Window
    - Generic Roadmap Framework (not the cards)
    - Calendar Modal
    - gitHub Modal
    - Stack Overflow Modal

  2. Query DB for Resources
    Global - by topic:
      - Server returns array of objects
      - Frontend JS generates new objects from array elements
        - object prototype has methods:  
          - generate html and append
          - update resource information
          - query the database?
    Roadmap:
      - Load all resources:
        - Server returns array of objects
        - Frontend JS generates new objects from array elements
          - object prototype has methods:
            - generate html and append
            - update resource information
            - query the database?
      - Load topics:
        - Frontend JS generates circles
        - vertical wire is fixed
        - Circles for topics scroll vertically
    
  3.  Ajax api request to Stack Overflow
    - Frontend JS handles queueing of results by group of 5
  
  4.  Ajax api requet to GitHub
    - Frontend JS handles queueing of results by group of 5

  5. Click roadmap topic:
    - render modal
    - render resources 
        - Click on resource:
          - flip card and show info
          - front and back of card has visit button to open resource
            in a new window.

  7. Click on global resource shows back of card
    - click on visit button opens resource in new window.


  

  Roadmap:
  // composed of topics
    render method
    Topic:
    // composed of resources
      render method
      resources:
        data
        render methods
  
  

  curriculum {
    [topic{
      [resource{}
      resource{}
      resource{}]
    }
    topic{
      [resource{}
      resource{}
      resource{}]
    }]
  }