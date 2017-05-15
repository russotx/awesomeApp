/*__________ THE RESOURCE PROTOTYPE _________
--When created as a global resource the resource will have properties for
id:, name:, link:, difficulty:, tags:, and popularity:.
--When created as a user's resource in their curriculum/roadmap the resource
will be protoyped off the corresponding global resource. 
*NOTE* The global resource will hold the properties listed above and 
the curriculum resource will hold additional properties for Notes:, position: (in its 
roadmap topic), and the roadmap topic: (to which it belongs). 
The curriculum resource will have access to its prototype properties and will 
not require duplication of property changes.
*/ 
const resource = {
  // copy all properties of an object parameter to the new object
  init: function(obj) {
      for (x in obj){
        this[x] = obj[x];
      }
      // return this to allow chaining the init function to object creation
      return this;
    },
  // render function to display the resource as a card for the user
  // CSS will handle the illusion of there being two sides to the card
  // cardFront will be absolute position pulled out of flow and 1 z-index above cardBack
  // cardBack will slide up behind cardFront.
  // parent parameter is the element to append the card.  
  // uid shouldn't be used as an element id, resources could have duplicates
  renderCard : function(parent,position){
    // first parameter is mandatory, second is optional
    // parent- where to attach the element
    // position - string 'append' or 'prepend', appends by default
    // ?? add bootstrap classes if needed 
    let card = $('<li>').addClass(this.id);
    let cardFront = $('<div>').addClass('resource front').html(this.name);
    const deleteButton = $('p').html('&#10006;');
    cardFront.append(deleteButton).addClass('delete-button');
    let cardBack = $('<div>').addClass('resource back');
    let cardLink = $('<h4>').addClass('cardLink').html(this.link);
    let cardNotes = $('<p>').addClass('cardNotes').html(this.notes);
    cardBack.append(cardLink).append(cardNotes);
    card.append(cardFront).append(cardBack);
    if ((position) && (position == 'prepend')){
      parent.prepend(card);
    } else {
      parent.append(card);
    }
  }
}

/* _______ TOPIC PROTOTYPE __________ 
will contain an array of prototyped resources which will be given 
additional properties indicating topicName, position, and notes  */
const topic = {
  // title: '',
  // position: 1,
  // topicResources: [{},{}],
  topicIcons : {
    /*fill this with paths to icons*/
    // there's probably a cleaner way to do this, but this is fast
    javaScript : '',
    html : '',
    css : '',
    jQuery : '',
    nodeJS : '',
    expressJS : '',
    passport : '',
    mongo : '',
    sequelize : '',
    mongoose : '',
    mysql : '',
    react : '',
    angular : '',
    handlebars : '',
    pug : '',
    ejs : '',
    ember : '',
    cSharp : '',
    php : '',
    python : '',
    ruby : '',
    gulp : '',
    grunt : '',
    browserfy : '',
    bower : '',
    moment : '',
    lodash : ''
  },
  // *Trigger This* when the user clicks on a topic icon
  renderModal : function(){
    
    // ------------- !!! need javascript to render the popout window !!! ------------//

    // render the resource cards. Loop through all the resources and append to the <'id=topicName' ul> element in the topic. 
    let resList = $('#'+this.title);
    // clear the element first
    resList.html('');
    // traverse the array of resources and use their render function to display the resources
    this.topicResources.forEach((item) => item.render(resList));
  },
  // *Trigger This* on page load. Render the topic button with an icon image link from the object of icon links
  renderIcon : function(parent){
    let glyph = $('<img>')
    glyph.attr('src',this.topicIcons(this.title));
    glyph.attr('alt',this.topicIcons(this.title));
    glyph.addClass('topicButton');
    parent.append(glyph);
  },
  // *Trigger This* when the user drops a resource on their roadmap
  addResource : function(dragNdropRes,activeTopic){
    // we don't need to post the whole object, it could be filled with data we don't need
    let dataToPost = { topic : activeTopic,
                       resId : dragNdropRes.id,
                       notes : 'notes go here'
                     };
    // if the resource the user just dragged in doesn't have a tag for the 
    // the topic it was dragged to, then we'll add one
    if (dragNdropRes.tags.split(' ').indexOf(activeTopic) == -1) {
      dragNdropRes.tags += activeTopic;
    }
    $.post('/api/userRoadmap',dataToPost,function(data,status){
      // send the post to sequelize
    })
    .done(console.log('successful update to the database.'))
    .fail(function(data){
      console.log(data);
      alert('aw snap, adding that resource failed. Should have used Mongo bro.');
    });
  },
  // *Trigger This* when the user delete's a resource
  delResource : function(resToDelete){
    // remove a resource from this.topicResources object
    $.delete('/api/userRoadmap/',resToDelete,function(data,status){
      // send to sequelize to delete the resource from the DB
    })
    .done(function(resToDelete){
      $('#'+this.title).find(resToDelete.id).remove();
      console.log('deleted');
    })
    .fail(function(data){
      console.log(data);
      alert("sorry, we couldn't delete that at the moment.");
    });
  },
}

/*_______  THE DASHBOARD ________*/ 


// user's resources
// [
//   {id:1 , topic:'javaScript' , notes:, topicPos:1}
//   {id:2 , topic:'javaScript' , notes:, topicPos:2}
//   {id:3 , topic:'css' , notes:, topicPos:1}
//   {id:4 , topic:'css' , notes:, topicPos:2}
//   {id:5 , topic:'css' , notes:, topicPos:3}
// ]

/*________ THE SIDEBAR WIH THE GLOBAL RESOURCES ________ */

const sideBar = {
  // allResources is an object containing resource objects
  // allResources property names match the corresponding resource object's id
  // making it an object of objects enables easier lookup by id and MUCH faster than an array
  // the jsonArray will look like [{id: ,link: ,difficulty: ,popularity: ,tags: },...]
  allResources : {},
  // *Trigger This* immediately on page request
  makeAllResources : function(jsonArray){
    jsonArray.forEach((resObj) => {
      this.allResources[resObj.id] = Object.create(resource).init(resObj);
    });
    // return this for chaining
    return this;
  },
  // *Trigger This* when topic clicked
  renderByTopic : function(activeTopic){
    const sideBarList = $('#global-resources');
    resToSort = [];
    for (var globalRes in allResources){
      // parse the tag string by spaces and check if the active topic is one of the tags
      if (globalRes.tags.split(' ').indexOf(activeTopic) != -1){
        // add the resource to an array, we still need to sort by popularity!
        resToSort.push(globalRes);
      }
    };
    // sort the resToSort array by popularity
    resToSort.sort((resA,resB) => {
      if (resA.popularity > resB.popularity){
        return 1;
      } else if (resA.popularity < resB.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    // render every resource in the resToSort array
    sideBarList.html('');
    resToSort.forEach((globalRes)=>{globalRes.render(sideBarList)});
  },
  // *trigger This* when user adds a new resource to global resources.
  newGlobaleResource : function(newResource){
    $.post('/api/allResources',newResource,function(data,status){
      // send object to backend
      // sequelize updates the DB with the object we send  
      console.log(data);  
    })
    .done(newResource.render($('#global-resources'),'prepend'))
    .fail(function(data){
      alert('There was an error loading your new resource.');
      cosole.log(data);
    }); 
  }
}

/* _________ CURRICULUM OBJECT ____________ */
// each topic is an object containing resources which are objects
// resources have all the properties of their prototype + an id, notes, 
// and the topic to which they belong
const curriculum = {
  // the list of topics  
  topicList : [],
  // call this when the user logs in to generate the roadmap topic buttons
  // parameter roadmaptable is an array of objects provided by db query
  // *Trigger This* on page load
  renderTopics: function(roadmapTable) {
    // populate a list of topics from the topic row of the user's roadmap table
    // tableRow = {id: , topic: , notes: ,topicPos: }
    roadmapTable.forEach((tableRow) => {
      if (this.topicList.indexOf(tableRow.topic) == -1){
        // for each unique instance of a topic name, create a prototyped topic object 
        // the index for the topic in topicList will match the topic's position
        // assign its title property to the topic name, and position property to the position number
        this.topicList[tableRow.topicPos] = Object.assign(Object.create(topic),
                                                          {title : tableRow.topic},
                                                          {position : parseInt(tableRow.topicPos)});
      }
    });
    // topicList is now an array of topic objects with position properties
    // render the topic icon images
    this.topicList.forEach((userTopic)=>userTopic.render('#roadmap'));
    // A topic object needs an array of resource objects to feel warm and fuzzy
    // first we'll traverse the array of topic objects
    this.topicList.forEach((userTopic)=>{
      // give the current userTopic a new array property to hold all the resources it needs
      userTopic.topicResources = [];
      // for every topic instance -> traverse the roadmapTable 
      for(row in roadmapTable){
        // does the topic property in the current row match the topic we're looking at?
        if (row.topic == userTopic.title) {
          // if its a match, we'll add a new resource object to the topicResources array
          // the resource object look like: {id: ,topic: ,notes: ,resId: }
          userTopic.topicResources.push(Object.assign(Object.create(sideBar.allResources[row.resId]),row)); 
          // Note: sideBar.allResources[row.resId] finds the global resource that matches the id for the resource
          // from our DB query. We're using the global resource as a prototype to make a resource for 
          // this topic in the curriculum. Then with Object.assign we're adding the properties from the table row. 
          // It gets all the data we need about the resource, all the user added data, and several nifty 
          // functions from the base resource prototype.  
        }
      }
    });
    // return this to allow chaining
    return this;
  },
  saveCurriculum : function(allData){
    $.put('/api/userRoadmap',allData,function(data,status){
      // send an object to the backend to update the database
    })
    .done(console.log('success'))
    .fail(function(data){
      alert('there was an error with your request.');
      console.log(data);
    });
  }
};
/********************************************************
 * 
 * 
 *    ___THIS IS WHERE THE APP ACTION HAPPENS____
 * 
 * 
 *********************************************************/

// loading the resources doesn't depend on page content
getGlobalResources(sideBar.makeAllResources);
// everything below relies on the page content being ready
$(document).ready(function(){
  
  const userID = noIdea;
  getUserCurriculum(curriculum.renderTopics);


});

function getGlobalResources(callback){
  $.get('/api/resources',function(req,res){
    callback(res);
  });
}

function getUserCurriculum(callback){
  $.get('/routetogetuserdata',function(req,res){
    callback(res);
  });
}
 