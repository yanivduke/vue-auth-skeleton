'use strict'
require('dotenv').load();
var jwt = require('jsonwebtoken');
var LoginSpecialRules = require('./LoginSpecialRules');

module.exports = function(req, res, next) {
  var token = req.headers['bearer'];
  if (token)
  {
    jwt.verify(token, process.env.SECRET_OR_KEY , function( err, decoded) {
      if(err) 
      {
        res.status(401).json({
          status: "error",
          error_type: "authorizerr",
          message: "שגיאה בזיהוי משתמש, יש לבצע כניסה מחדש"
        })
      }
      else
      {
        if(!!decoded.login_date && !!decoded.session_id && LoginSpecialRules()) // can send for more checks
        {
          req.scope = {
            user_id: decoded.user_id,
            id: decoded.id
          }
          next()
        }
        else
        {
          res.status(401).json({
            status: "error",
            error_type: "authorizerr",
            message: "fake token!!!"
          })
        }
      }
    });   
  }
  else
  {
   res.status(403).json({
     status: "error",
     error_type: "authforberr",
     message: "שגיאה בגישה, לא סופק קוד זיהוי"
   })
  }
}
