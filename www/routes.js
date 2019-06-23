

module.exports = function(app, passport, db) {


  app.get('/', (req, res, next) => {
    var auth;
    if (req.isAuthenticated()) {
      auth = req.user.emails[0].value;
    }
    res.render('index.ejs', {hello: "hello world", auth:auth})
  })

 



  app.get('/logout', function(req, res){
    console.log('logging out');
    req.logout();
    res.redirect('/');
  })

  // we will call this to start the GitHub Login process
  app.get('/auth/github', passport.authenticate('github'));

  // GitHub will call this URL
  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res, next) {
      res.redirect('/protected');
    }
  );



  app.get('/auth/google', passport.authenticate('google',{ scope : ['profile', 'email'] }));
  // app.get('/auth/google', passport.authenticate('google',{scope: 'https://www.googleapis.com/auth/plus.me https://www.google.com/m8/feeds https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'}));

  app.get('/auth/google/callback', passport.authenticate('google', { 
            failureRedirect: '/',
            successRedirect : '/protected' })
  );



  app.get('/protected', ensureAuthenticated, function(req, res) {
    res.redirect('/')
  });


};



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next(); }

  // denied. redirect to login
  res.redirect('/')
}

