const tagparser = require('./src/tagparser.js');


module.exports = function(app, passport, db) {


  app.get('/', (req, res, next) => {
    var auth;
    if (req.isAuthenticated()) {
      auth = req.user.emails[0].value;
    }
    res.render('index.ejs', {hello: "hello world", auth:auth})
  })

 

  app.post('/partial', (req, res) => {

    db.collection('taglist').find({tag:req.body.partial}).toArray((err, taglist) => {
      if (err) return console.log(err)
      // console.log(result.length);
      // res.render('index.ejs', {taglist: taglist, auth:auth})
      res.send(taglist);
    });

  })


  app.post('/tag', (req, res) => {

    var result = tagparser.findPartial(db, req.body.tag);
    res.send(result);


    // db.collection('taglist').find({tag:req.body.tag}).toArray((err, result) => {
    //   // console.log(result);
    //   // console.log(req.body);
    //   if(result[0]){
    //     db.collection('tags')
    //     .findOneAndUpdate({email: req.body.email}, {
    //       $push: {
    //         array: req.body.array
    //       }
    //     }, 
    //      (err, result) => {
    //       if (err) return res.send(err)
    //       console.log('updated database')
    //       // console.log(result);
    //       res.send(result);
    //     })
    //   }else{
    //     const id = crypto.randomBytes(16).toString("hex");
    //     req.body.guid = id.substring(0,7);
    //     var temp = req.body.array;
    //     // console.log("temp:"+temp);
    //     req.body.array = [];
    //     req.body.array.push(temp);
    //     db.collection('tags').save(req.body, (err, result) => {
    //       if (err) return console.log(err)
    //       console.log('saved to database')
    //       // res.redirect('/')
    //       res.send(result);
    //     })
    //   }
    // })
  })



////////////////////////////////////////////////////////////////////////////////////////////////////

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

