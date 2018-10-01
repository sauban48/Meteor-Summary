import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.toolbar.events({
'click #submit' : function(){
	addtoSnip();
},
'keypress #search' : function () {
	if(e.keycode  == 13)
		addtoSnip();
}

});

function addtoSnip(){
	textvalue = $('#search');
	if(!textvalue || !textvalue.val()) return ;
	Snippets.insert({text:textvalue.val()});
	textvalue.val('');
}
