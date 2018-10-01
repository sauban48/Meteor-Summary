import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

FlowRouter.route( '/main.html', {
    action: function() {
      console.log( "Welcome!" );
    },
    name: 'introduction' 
  });
