module.exports = function(app, options) {
  app.component(require('./dropdown'));
  app.component(require('./modal'));
  app.component(require('./tabs'));
  if(!options || (options && options.loadStyles)) app.loadStyles(__dirname + '/css/bootstrap.min');
};
