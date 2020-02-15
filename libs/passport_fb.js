const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_URL_CALLBACK
} = require("../config.js");

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: FACEBOOK_URL_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, { user: profile });
    }
  )
);

module.exports = passport;
