import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

FlowRouter.route( '/main.html', {
    action: function() {
      // Do whatever we need to do when we visit http://app.com/terms.
      console.log( "Welcome!" );
    },
    name: 'introduction' // Optional route name.
  });
