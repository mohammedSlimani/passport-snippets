const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const googleKeys = require('./keys');
passport.use(
    new GoogleStrategy({
        //options of the google-strat
        clientID: googleKeys.google.clientID,
        clientSecret : googleKeys.google.clientSecret
    }),()=>{
        //passport cb
    })