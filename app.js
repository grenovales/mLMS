var Scatter = require('scatter');
var scatter = new Scatter({
    log: function(level, message) {
       console.log(level + ": " + message);
   }
});


scatter.registerParticles([
  __dirname + '/core'
]);


//The application entry point, the dependency is loaded explicitly
scatter.load('svc|sequence!initializeApp').then(function(initializeApp) {
    return initializeApp();
}).then(function() {
    console.log('App initialized');
});

