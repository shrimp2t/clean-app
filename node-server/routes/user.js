var express = require('express');
var router = express.Router();
var User = require('../models/user');


// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/templateLogReg/index.html'));
});


//POST route for updating data
router.post('/', function (req, res, next) {
  // confirm that user typed same password twice
  console.log( 'req.body', req.body );
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})



//POST route for updating data
router.post('/login', function (req, res, next) {
	// confirm that user typed same password twice
	console.log( 'req.body', req.body );
	
	User.authenticate(req.body.email, req.body.password, function (error, user) {
	if (error || !user) {
		res.status(401).json({ error: 'Wrong email or password.', code: 401 })
	} else {
		req.session.userId = user._id;
		res.json({ login: user._id });
	}
	});
	
  })



// GET route after registering
router.get('/profile', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
		var err = new Error('Not authorized! Go back!');
		err.status = 400;
		return res.json(err);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return res.json( {
			  code: 400,
			  error: 'Not authorized!'
		  });
        } else {
          // return res.json( user )
          return res.json( {
			id: user._id,
			name: 'Administrator',
			email: user.email,
			avatar: '',
			role: 'admin',
			authorized: true,
		  } )
        }
      }
    });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;