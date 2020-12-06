const jwt = require('jwt-simple');
var express = require("express");
var user = require('../models/user');
var router = express.Router();
const withAuth = require('../auth/verify');
var mongoose = require('mongoose');





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
/*------------------------------------For Deleting the user-----------------------------------------------------*/
router.delete('/users/delete', function (req, res, next) {
  user.find({
    username: req.body.username
  }, function (err, body) {
    if (!err) {
      console.log(body)
      var user = body[0];
      console.log(user)
      user.remove({
        username: user.username
      }, function (err, body) {
        if (!err) {
          return res.status(200).json({ success: 'success' });
        }
        else {
          return res.status(400).json({ error: err });
        }
      })
    }
  })
})



/*------------------------------------For Dashboard--------------------------------*/
router.get('/users', function (req, res, next) {
  user.find({
    usertype: 'user'
  }, function (err, body) {
    if (!err) {
      return res.send(body);

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

  var usertype = 'user'

  var instance = new user({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    country: req.body.country,
    usertype: usertype
  })


  if (!req.body.username || !req.body.password) {
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




/*-----------------------------------Update-----------------------------------------------------------*/
router.put('/users/update', function (req, res, next) {




  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'foo');
  });

  Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
  });


  var id;
  username = req.body.username,
    password = req.body.password,
    fullname = req.body.fullname,
    country = req.body.country

  user.find({
    username: req.body.username
  }, function (err, body) {
    if (!err) {
      var user = body[0];
      id = user._id
    }
  }).then(
    user.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(id) }, { username: username, password: password, fullname: fullname, country: country, usertype: "user" }, function (err, docs) {
      if (err) {
        console.log(err)

      }
      else {
        console.log(username)
        console.log(password)
        console.log(fullname)
        console.log(country)
        console.log("Updated User")
      }
    }))
})
/*----------------------------------------------------------------------------------------------*/
module.exports = router;

