
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = req.params.userName;
  if(name === undefined) {
    name = 'World';
  }
  console.log('name');
  res.render('index', {
  	'name': name,
  });
};
