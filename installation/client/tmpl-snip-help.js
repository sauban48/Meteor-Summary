Meteor.subscribe('snippet');

Template.snippet.helpers({

snippet : function(){
	return Snippets.find().fetch();
}

});