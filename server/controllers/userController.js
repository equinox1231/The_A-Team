const jwt = require('jwt-simple');
var express = require("express");
var user = require('../models/user');
var router = express.Router();
const withAuth = require('../auth/verify');





var mongoose = require('mongoose');
const secret = 'mysecretsshhh';

mongoose.connect("mongodb+srv://osamaahmed17:Airuniversity17!@ateam.s0xgr.mongodb.net/mydb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})



/*------------------------------For Signin/Login--------------------------------*/
router.post('/users/signin', function (req, res, next) {
  user.find({
    username: req.body.username
  }, function (err, body) {
    if (!err) {
      console.log(body)
      var user = body[0];
      console.log(user)
    
      if (req.body.password == user.password) {
        var payload = {
          username: req.body.username,
          password: req.body.password,
          fullname: req.body.fullname,
          country: req.body.country,

        };
        res.send({ token: tokenForUser(payload) });
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }

    } else {
      return res.status(401).json({ error: 'Authentication failed.' });
    }
  });
});
/*----------------------------------------------------------------------------------------------*/
router.post('/users/delete', function (req, res, next) {
  mydb.find({
    selector: { username: req.body.username }
  }, function (err, body) {
    if (!err) {
      var user = body.docs[0];
      id = user._id;
      rev = user._rev;
      mydb.destroy(id, rev, function (err, body, header) {
        if (!err) {
          return res.status(200).json({ success: 'success' });
        }
        else {
          return res.status(400).json({ error: err });
        }
      });

    } else {
      return res.status(400).json({ error: err });

    }
  });
});



/*------------------------------------For Dashboard--------------------------------*/
router.get('/users', function (req, res, next) {
  mydb.find({
    selector: { schema: 'User' }
  }, function (err, body) {
    if (!err) {
      return res.send(body.docs);

    } else {
      return res.status(400).json({ error: err });
      ;

    }
  });
});


/*-----------------------------For Checking Authentication------------------------------------------*/
router.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});

/*----------------------------------------------------------------------------------------------*/
function tokenForUser(user) {
  return jwt.encode({ sub: user.username }, secret);
}
/*------------------------------For SiginUp-----------------------------------------------------*/


router.post('/users/signup', function (req, res, next) {

  var instance = new user({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    country: req.body.country
  })

  if (!username || !password) {
    return res.status(422).send({ error: 'You must provide username and password' });
  }

  instance.save(function (err) {
    if (!err) {
      return res.status(200).json({ success: 'success' });
    }
    else {
      return res.status(400).json({ error: err });
    }
  });
});








/*------------------------------------Delete----------------------------------------------------*/
router.post('/users/delete', function (req, res, next) {
  mydb.find({
    selector: { username: req.body.username }
  }, function (err, body) {
    if (!err) {
      var user = body.docs[0];
      id = user._id;
      rev = user._rev;
      mydb.destroy(id, rev, function (err, body, header) {
        if (!err) {
          return res.status(200).json({ success: 'success' });
        }
        else {
          return res.status(400).json({ error: err });
        }
      });

    } else {
      return res.status(400).json({ error: err });

    }
  });
});

/*-----------------------------------Update-----------------------------------------------------------*/
router.post('/users/update', function (req, res, next) {
  mydb.find({
    selector: { username: req.body.username }
  }, function (err, body) {
    if (!err) {
      var user = body.docs[0];
      id = user._id;
      rev = user._rev;
      username = req.body.username,
        password = req.body.password,
        fullname = req.body.fullname,
        country = req.body.country
      mydb.insert({
        _id: id,
        _rev: rev,
        username: username,
        password: password,
        fullname: fullname,
        country: country,
        schema: "User"
      })
    }
  });
});
/*----------------------------------------------------------------------------------------------*/
module.exports = router;



